const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const validateRegistration = require("../../validation/register");
const validateLogin = require("../../validation/login");

const secret = require("../../config/key").ourSecret;

const User = require("../../models/Users");

router.get("/test", (req, res) => {
  res.json({ Message: "This router works" });
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegistration(req.body);

  if (!isValid) return res.status(400).json(errors);

  User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  })
    .then(user => {
      if (user) {
        errors.user = "Account already exists. Forgot your password?";
        return res.status(400).json(errors);
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          username: req.body.username,
          password: bcryptPassword(req.body.password),
          image: req.body.image
        });
        newUser
          .save()
          .then(user => res.json(user))
          .catch(err => console.log(err));
      }
    })
    .catch(err => console.log(err));
});

const bcryptPassword = password => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      password = hash;
    });
  });
  return password;
};

router.post("/login", (req, res) => {
  const login = req.body.username || req.body.email;
  const password = req.body.password;
  const { errors, isValid } = validateLogin(req.body);
  if (!isValid) return res.status(400).json(errors);
  // User.findOne({ email: req.body.email })
  User.findOne({
    $or: [{ email: req.body.email }, { username: req.body.username }]
  }).then(user => {
    if (!user) {
      errors.user = "User not found";
      res.send(404).json(errors);
    }

    bcrypt.compare(password, user.password).then(match => {
      if (match) {
        const payload = { id: user.id, username: user.username }; //add other info we want to send back
        jwt.sign(payload, secret, { expiresIn: 3600000 }, (err, token) => {
          if (err) throw err;
          res.json({ success: true, token: "Bearer " + token });
        });
      } else {
        errors.password = "Password incorrent";
        return res.status(400).json(errors);
      }
    });
  });
});

// //route for matching a user/checking session

// router.post(
//   "/match",
//   passport.authenticate("jwt", { session: false }),
//   (req, res) => {}
// );

router.get("/", (req, res) => {
  User.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.status(404).json({ users: "No users found" }));
});

// router.get("/", (req, res) => {
router.get(
  "/auth",
  passport.authenticate("jwt", { session: false }), //comment to toggle auth test
  (req, res) => {
    //where user it not set to blocked, hidden or hasn't blocked current user?
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.status(404).json({ users: "No users found" }));
  }
);

module.exports = router;
// {
//   "success": true,
//   "token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjYjBmZjlhZjNlMDIzM2FhOGUwYzEwNCIsInVzZXJuYW1lIjoiR3JhZnQwIiwiaWF0IjoxNTU1MTAzOTcxLCJleHAiOjE1NTg3MDM5NzF9.DI1hNNvBsOLTMeP2jRUtsHXYkhgl51rDdxZ4To6cMZk"
// }

//auth token you can use to test
//or you can log in with 'Graft0@live.com' '0010110', should also be able to use 'Graft0' as a username instead, super easy to impleent

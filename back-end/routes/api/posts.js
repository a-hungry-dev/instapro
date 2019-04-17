const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const formidable = require("formidable");
const multer = require("multer");
const fs = require("fs");

const keys = require("../../config/Key");

const User = require("../../models/Users");
const Posts = require("../../models/Posts");

multer({
  dest: "uploads/",
  rename: function(fieldname, filename) {
    return filename;
  }
});

// files.map(file => {
//   console.log(file);
//   res.sendStatus(200);
// });

// Add post
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    new formidable.IncomingForm()
      .parse(req, (err, fields, files) => {
        if (err) {
          console.error("Error", err);
          throw err;
        }
        console.log(fields);
        const newPost = new Posts({
          image: `${files.image.name}`,
          comments: [{ user: fields.user, text: fields.text }],
          user: fields.user._id
        });
        console.log(newPost);
        newPost
          .save()
          .then(post => res.json(post))
          .catch(err => console.log(err) || res.json(err));
      })
      .on("fileBegin", function(name, file) {
        file.path = __dirname + `../../../uploads/images/${file.name}`;
      })
      .on("file", function(name, file) {
        //
      });
    //validation
  }
);

//@router get /api/posts/
//@descriptin Returns all following posts based on relevance.
//@ppublic
router.get("/", (req, res) => {
  Posts.find()
    .sort({ date: -1 })
    .then(posts => res.json(posts))
    .catch(err => res.status(404).json(err));
  //validation
});

router.get("/:id", (req, res) => {
  Posts.findById(req.params.id)
    .then(post => res.json(post))
    .catch(err => res.status(404).json({ message: "This post doesn't exist" }));
});

router.put("/", (req, res) => {
  //update
});

router.delete("/:id", (req, res) => {
  //remove
});

module.exports = router;

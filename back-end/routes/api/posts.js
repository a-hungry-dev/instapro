const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/Key");

const User = require("../../models/Users");
const Posts = require("../../models/Posts");

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

// Add post
//auth
router.post("/", (req, res) => {
  //validation

  const newPost = new Posts({
    likes: [],
    comments: []
  });

  newPost
    .save()
    .then(post => res.json(post))
    .catch(err => res.json(err));
});

router.delete("/:id", (req, res) => {
  //remove
});
module.exports = router;

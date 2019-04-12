const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validationPost = require("../../validation/posts");

const Profile = require("../../models/Posts");

const User = require("../../models/Users");

router.get("/test", (req, res) => res.json({ Message: "Posts route works" }));

module.exports = router;

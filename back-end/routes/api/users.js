const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../../config/Key");

const User = require("../../models/Users");

router.get("/test", (req, res) => {
  res.json({ Message: "This router works" });
});

router.post("/register", (req, res) => {
  //if user then dont create
});

router.post("/login", (req, res) => {});

router.delete("/", (req, res) => {});

module.exports = router;

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validationProfile = require("../../validation/stories");

const Profile = require("../../models/Stories");

const USer = require("../../models/Users");

router.get("/test", (req, res) => res.json({ Message: "Stories route works" }));

module.exports = router;

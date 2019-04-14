const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const validationProfile = require("../../validation/profile");

const Profile = require("../../models/Profile");

const User = require("../../models/Users");

router.get("/test", (req, res) => res.json({ Message: "Profile route works" }));

module.exports = router;

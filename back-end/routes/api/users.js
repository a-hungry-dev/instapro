const express = require("express");
const router = express.router();
const bcrypt = require("bcrypt-js");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const keys = require("../..config/keys");

const User = require("../../models/Users");

router.get("test/", (res,res) => {res.json({Message: "This router works"})})

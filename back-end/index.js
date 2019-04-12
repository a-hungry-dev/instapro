const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const passport = require("passport");

const users = require("./routes/api/users");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
//not sure we need cors.discuss

const db = require("./config/Key").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("connected to db"))
  .catch(err => console.log(err));

app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const passport = require("passport");

const app = express();

const port = process.env.PORT || 5000;

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

app.use(passport.initialize());

require("./config/passport")(passport);

const users = require("./routes/api/users");
app.use("/api/users", users);

const posts = require("./routes/api/posts");
app.use("/api/p", posts);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

const db = require("./config/Key.js").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("Connected to the db"))
  .catch(err => console.log(err));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const users = require("./routes/api/users");
app.use("/api/users", users);

const posts = require("./routes/api/posts");
app.use("/api/p", posts);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});

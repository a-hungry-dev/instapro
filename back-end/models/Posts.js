const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const posts = new Schema({
  likes: [
    {
      type: Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "comments"
      },
      text: {
        type: String,
        required: true
      },
      likes: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model("posts", posts);

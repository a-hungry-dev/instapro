const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  gender: {
    type: String
  },
  seen,
  reactions,
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  likes: [
    { post: { type: Schema.Types.ObjectId, ref: "post" }, date: Date.now() }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Story = mongoose.model("story", storySchema);

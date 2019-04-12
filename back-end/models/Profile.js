const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
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

  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "user"
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
        ref: "user"
      },
      date: {
        type: Date,
        default: Date.now()
      }
    }
  ],
  likes: [
    { post: { type: Schema.Types.ObjectId, ref: "posts" }, date: Date.now() }
  ],
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = Profile = mongoose.model("profile", profileSchema);

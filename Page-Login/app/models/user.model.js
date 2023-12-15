const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    firstname: String,
    secondname: String,
    username: String,
    email: String,
    password: String,
    accepted: {
      type: Boolean,
      default: false
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;
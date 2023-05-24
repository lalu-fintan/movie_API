const mongoose = require("mongoose");
const passwordValidator = require("password-validator");

const userModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 6,
      maxlength: 1024,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      // default: false,
    },
  },
  { timeStamps: true }
);

module.exports = mongoose.model("user", userModel);

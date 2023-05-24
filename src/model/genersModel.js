const mongoose = require("mongoose");

const genereScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100,
  },
});

module.exports = mongoose.model("genre", genereScheme);

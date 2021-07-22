const mongoose = require("mongoose");

const user = mongoose.model(
  "user",
  new mongoose.Schema({
    name:String,
    password:String,
    email:String,
  },
   { timestamps: true })
);

module.exports = user;




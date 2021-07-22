const mongoose = require("mongoose");



const product = mongoose.model(
  "product",
  new mongoose.Schema({
    proId:Number,
    name: String,
    price:Number,
    categoryId:Number,
    image:String,
  })
);

module.exports = product;


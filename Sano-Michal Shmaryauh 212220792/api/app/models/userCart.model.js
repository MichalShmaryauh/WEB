const mongoose = require("mongoose");
const Schema=mongoose.Schema


const userCart = mongoose.model(
  "userCart",
  new mongoose.Schema({
    userId:
    {
     type:Schema.Types.ObjectId,
      ref:'user'
    },
    productId:
    { 
      // type:Number,
      type:Schema.Types.ObjectId,
      ref:'product'
    },
    categoryId:Number,
    productCount:Number,
  })
);

module.exports = userCart;

 

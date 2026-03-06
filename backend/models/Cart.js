const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
});

module.exports = mongoose.model("Cart", CartSchema);
const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

/* ===============================
   GET CART ITEMS
================================= */
router.get("/", async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   ADD TO CART
================================= */
router.post("/", async (req, res) => {
  try {
    const { productId, name, price, image } = req.body;

    const newItem = new Cart({
      productId,
      name,
      price,
      image,
    });

    await newItem.save();

    res.json({ message: "Item added to cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/* ===============================
   DELETE CART ITEM
================================= */
router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
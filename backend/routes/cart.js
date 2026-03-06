const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

/* GET CART */

router.get("/", async (req, res) => {
  try {
    const cart = await Cart.find();
    res.json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ADD TO CART */

router.post("/", async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE CART ITEM */

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
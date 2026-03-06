const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");

/* GET CART ITEMS */

router.get("/", async (req, res) => {
  try {
    const items = await Cart.find();
    res.json(items);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* ADD TO CART */

router.post("/", async (req, res) => {
  try {
    const item = new Cart(req.body);
    await item.save();
    res.json(item);
  } catch (error) {
    res.status(500).json(error);
  }
});

/* DELETE CART ITEM */

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
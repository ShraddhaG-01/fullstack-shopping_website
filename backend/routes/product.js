const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

/* GET ALL PRODUCTS */

router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ADD PRODUCT */

router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE PRODUCT */

router.delete("/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});

/* ADD SAMPLE PRODUCTS */

router.get("/seed", async (req, res) => {
  try {

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Laptop",
        price: 50000,
        description: "High performance laptop",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
      },
      {
        name: "Mobile Phone",
        price: 20000,
        description: "Latest smartphone",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
      },
      {
        name: "Headphones",
        price: 3000,
        description: "Noise cancelling headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
      }
    ]);

    res.json({ message: "Sample products added successfully" });

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
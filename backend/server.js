const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

// homepage route
app.get("/", (req, res) => {
  res.send("Shopping Website Backend is Running 🚀");
});

// connect mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
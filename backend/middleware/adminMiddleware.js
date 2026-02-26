const jwt = require("jsonwebtoken");
const User = require("../models/User");

const adminMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization");

    if (!token)
      return res.status(401).json({ message: "No token, access denied" });

    const verified = jwt.verify(
      token.replace("Bearer ", ""),
      process.env.JWT_SECRET
    );

    const user = await User.findById(verified.id);

    if (!user || user.role !== "admin")
      return res.status(403).json({ message: "Admin only access" });

    req.user = user;
    next();

  } catch (err) {
    res.status(400).json({ message: "Invalid token" });
  }
};

module.exports = function (req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access denied. Admin only." });
  }
  next();
};
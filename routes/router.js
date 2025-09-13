const express = require("express");
const router = new express.Router();
const Products = require("../productsSchema");
const Users = require("../userSchema");

// Example route: get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Products.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Example route: create a new user
router.post("/users", async (req, res) => {
  try {
    const user = new Users(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

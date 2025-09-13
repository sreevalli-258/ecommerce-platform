const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  url: String,
  detailUrl: String,
  title: {
    shortTitle: String,
    longTitle: String
  },
  price: {
    mrp: Number,
    cost: Number,
    discount: String
  },
  description: String,
  discount: String,
  tagline: String
});

// ✅ Fix OverwriteModelError by reusing existing model if defined
const Products =
  mongoose.models.products || mongoose.model("products", productSchema);

module.exports = Products;

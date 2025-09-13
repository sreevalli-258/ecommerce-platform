require("dotenv").config();
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Database connection
require("./conn");

// Models & Routes
const Products = require("./productsSchema"); // adjust path if inside models/
const router = require("./routes/router");
 // adjust path if inside routes/
const DefaultData = require("./defaultdata");

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(router);

// Port from .env (fallback 8005)
const PORT = process.env.PORT || 8005;

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

// Seed default data
DefaultData();

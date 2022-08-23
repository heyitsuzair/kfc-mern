const express = require("express");
const router = express.Router();
const { addToCart } = require("../controllers/CartController");
router.post("/addToCart", addToCart);

module.exports = router;

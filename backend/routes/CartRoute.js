const express = require("express");
const router = express.Router();
const { addToCart, getCartInfo } = require("../controllers/CartController");
router.post("/addToCart", addToCart);
router.get("/getCartInfo/:email", getCartInfo);

module.exports = router;

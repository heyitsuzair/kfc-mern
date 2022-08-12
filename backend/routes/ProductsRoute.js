const express = require("express");
const router = express.Router();
const { addProduct, getCatProds } = require("../controllers/ProductController");
router.post("/addProduct", addProduct);
router.get("/getCatProds/:id", getCatProds);
module.exports = router;

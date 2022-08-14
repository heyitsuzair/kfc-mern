const express = require("express");
const router = express.Router();
const {
  addProduct,
  getCatProds,
  getProdDetail,
  updateProduct,
} = require("../controllers/ProductController");
router.post("/addProduct", addProduct);
router.get("/getCatProds/:id", getCatProds);
router.get("/getProd/:id", getProdDetail);
router.post("/updateProd/:id", updateProduct);
module.exports = router;

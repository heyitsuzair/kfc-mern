const express = require("express");
const router = express.Router();
const {
  addProduct,
  getCatProds,
  getProdDetail,
  updateProduct,
  delProduct,
} = require("../controllers/ProductController");
router.post("/addProduct", addProduct);
router.get("/getCatProds/:name", getCatProds);
router.get("/getProd/:id", getProdDetail);
router.post("/updateProd/:id", updateProduct);
router.post("/delProd/:id", delProduct);
module.exports = router;

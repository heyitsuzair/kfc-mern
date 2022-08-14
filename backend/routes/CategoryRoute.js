const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCat,
  updateCat,
  delCat,
} = require("../controllers/CategoryController");
router.post("/addCat", addCategory);
router.get("/getCat", getCat);
router.post("/updateCat/:id", updateCat);
router.post("/delCat/:id", delCat);
module.exports = router;

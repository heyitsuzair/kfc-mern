const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCat,
  updateCat,
} = require("../controllers/CategoryController");
router.post("/addCat", addCategory);
router.get("/getCat", getCat);
router.post("/updateCat/:id", updateCat);
module.exports = router;

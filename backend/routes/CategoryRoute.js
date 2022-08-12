const express = require("express");
const router = express.Router();
const { addCategory, getCat } = require("../controllers/CategoryController");
router.post("/addCat", addCategory);
router.get("/getCat", getCat);
module.exports = router;

const express = require("express");
const router = express.Router();
const {
  addSoftdrink,
  delSoftdrink,
  getSoftdrinks,
} = require("../controllers/SoftdrinkController");
router.post("/addSoftdrink", addSoftdrink);
router.post("/delSoftdrink/:id", delSoftdrink);
router.get("/getSoftdrinks", getSoftdrinks);
module.exports = router;

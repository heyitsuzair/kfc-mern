const express = require("express");
const router = express.Router();
const {
  addAddon,
  delAddon,
  getAddons,
} = require("../controllers/AddonController");
router.post("/addAddon", addAddon);
router.post("/delAddon/:id", delAddon);
router.get("/getAddons", getAddons);

module.exports = router;

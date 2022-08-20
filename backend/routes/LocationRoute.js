const express = require("express");
const router = express.Router();
const { addLocation } = require("../controllers/LocationController");
router.post("/addLocation", addLocation);
module.exports = router;

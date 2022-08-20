const express = require("express");
const router = express.Router();
const {
  addLocation,
  getLocations,
} = require("../controllers/LocationController");
router.post("/addLocation", addLocation);
router.get("/getLocations/:email", getLocations);
module.exports = router;

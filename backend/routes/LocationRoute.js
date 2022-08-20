const express = require("express");
const router = express.Router();
const {
  addLocation,
  getLocations,
  delLocation,
} = require("../controllers/LocationController");
router.post("/addLocation", addLocation);
router.get("/getLocations/:email", getLocations);
router.post("/delLocation/:id", delLocation);
module.exports = router;

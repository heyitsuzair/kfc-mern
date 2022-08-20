const express = require("express");
const router = express.Router();
const {
  addLocation,
  getLocations,
  delLocation,
  editLocation,
} = require("../controllers/LocationController");
router.post("/addLocation", addLocation);
router.get("/getLocations/:email", getLocations);
router.post("/delLocation/:id", delLocation);
router.post("/editLocation", editLocation);
module.exports = router;

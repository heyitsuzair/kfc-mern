const express = require("express");
const router = express.Router();
const { addFav, getFavs } = require("../controllers/FavController");
router.post("/addFav", addFav);
router.get("/getFavs/:email", getFavs);

module.exports = router;

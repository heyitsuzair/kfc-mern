const express = require("express");
const router = express.Router();
const { addFav, getFavs, delFav } = require("../controllers/FavController");
router.post("/addFav", addFav);
router.get("/getFavs/:email", getFavs);
router.post("/delFav", delFav);

module.exports = router;

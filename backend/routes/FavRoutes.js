const express = require("express");
const router = express.Router();
const { addFav } = require("../controllers/FavController");
router.post("/addFav", addFav);

module.exports = router;

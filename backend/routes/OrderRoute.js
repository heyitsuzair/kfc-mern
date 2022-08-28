const express = require("express");
const router = express.Router();
const {
  addOrder,
  getCustomerOrders,
} = require("../controllers/OrderController");
router.post("/addOrder", addOrder);
router.get("/getCustomerOrder/:email", getCustomerOrders);

module.exports = router;

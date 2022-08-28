const express = require("express");
const router = express.Router();
const {
  addOrder,
  getCustomerOrders,
  success,
} = require("../controllers/OrderController");
router.post("/addOrder", addOrder);
router.get("/getCustomerOrder/:email", getCustomerOrders);
router.post("/success", success);

module.exports = router;

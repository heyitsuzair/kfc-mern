const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  product: [
    {
      type: Array,
      default: [],
    },
  ],
  email: {
    type: String,
    required: true,
  },
  paymentStatus: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  totalItems: {
    type: String,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_no: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("orders", orderSchema);

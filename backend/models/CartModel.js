const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  prod_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  addons: {
    type: Array,
    default: [],
  },
  softDrinks: {
    type: Array,
    default: [],
  },
});
module.exports = mongoose.model("cart", cartSchema);

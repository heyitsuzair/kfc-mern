const mongoose = require("mongoose");
const addonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  pic: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("addons", addonSchema);

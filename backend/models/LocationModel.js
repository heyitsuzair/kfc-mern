const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("locations", locationSchema);

const mongoose = require("mongoose");
const favSchema = new mongoose.Schema({
  prod_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("favourites", favSchema);

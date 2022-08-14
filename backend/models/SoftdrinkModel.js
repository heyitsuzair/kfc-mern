const mongoose = require("mongoose");
const softdrinkSchema = new mongoose.Schema({
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
module.exports = mongoose.model("softdrinks", softdrinkSchema);

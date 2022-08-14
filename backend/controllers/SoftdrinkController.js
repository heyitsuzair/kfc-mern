const { cloudinary } = require("../utils/cloudinary");
const softdrink = require("../models/SoftdrinkModel");
module.exports.addSoftdrink = async (req, res) => {
  try {
    const { name, price, pic } = req.body;
    const uploadedResp = await cloudinary.uploader.upload(pic, {
      upload_preset: "ligwwlyg",
    });
    const img_url = uploadedResp.secure_url;
    const addedSoftdrink = await softdrink.create({
      name,
      price,
      pic: img_url,
    });
    return res.status(200).json(addedSoftdrink);
  } catch (error) {
    console.error(error);
  }
};
module.exports.delSoftdrink = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await softdrink.findByIdAndDelete(id);
    if (del) {
      return res.status(200).json("Softdrink Deleted");
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.getSoftdrinks = async (req, res) => {
  try {
    const getAllSoftdrinks = await softdrink.find();
    return res.status(200).json(getAllSoftdrinks);
  } catch (error) {
    console.error(error);
  }
};

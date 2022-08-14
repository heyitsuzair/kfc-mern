const { cloudinary } = require("../utils/cloudinary");
const addon = require("../models/AddonsModel");
module.exports.addAddon = async (req, res) => {
  try {
    const { name, price, pic } = req.body;
    const uploadedResp = await cloudinary.uploader.upload(pic, {
      upload_preset: "ligwwlyg",
    });
    const img_url = uploadedResp.secure_url;
    const addedAddon = await addon.create({ name, price, pic: img_url });
    return res.status(200).json(addedAddon);
  } catch (error) {
    console.error(error);
  }
};
module.exports.delAddon = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await addon.findByIdAndDelete(id);
    if (del) {
      return res.status(200).json("Addon Deleted");
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.getAddons = async (req, res) => {
  try {
    const getAllAddons = await addon.find();
    return res.status(200).json(getAllAddons);
  } catch (error) {
    console.error(error);
  }
};

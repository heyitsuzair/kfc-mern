const cat = require("../models/CategoryModel");
const { cloudinary } = require("../utils/cloudinary");
module.exports.addCategory = async (req, res) => {
  try {
    const { catPic, name } = req.body;
    const uploadedResp = await cloudinary.uploader.upload(catPic, {
      upload_preset: "ligwwlyg",
    });
    const img_url = uploadedResp.secure_url;
    const addCat = await cat.create({ catPic: img_url, name });
    return res.status(200).json({ error: false, addCat });
  } catch (error) {
    console.error(error);
  }
};
module.exports.getCat = async (req, res) => {
  try {
    const getCategories = await cat.find();
    res.status(200).json({ error: false, getCategories });
  } catch (error) {
    console.error(error);
  }
};
module.exports.updateCat = async (req, res) => {
  try {
    const { catPic, name } = req.body;
    const { id } = req.params;
    if (catPic !== "") {
      const uploadedResp = await cloudinary.uploader.upload(catPic, {
        upload_preset: "ligwwlyg",
      });
      const img_url = uploadedResp.secure_url;
      const updateCat = await cat.findByIdAndUpdate(id, {
        name,
        catPic: img_url,
      });
      return res.status(200).json({ error: false, cat: updateCat });
    } else {
      const updateCat = await cat.findByIdAndUpdate(id, {
        name,
      });
      return res.status(200).json({ error: false, cat: updateCat });
    }
  } catch (error) {
    console.error(error);
  }
};

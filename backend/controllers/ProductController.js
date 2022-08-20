const product = require("../models/ProductModel");
const category = require("../models/CategoryModel");
const { cloudinary } = require("../utils/cloudinary");
module.exports.addProduct = async (req, res) => {
  try {
    const { name, desc, price, catId, prodImg } = req.body;

    const uploadedResp = await cloudinary.uploader.upload(prodImg, {
      upload_preset: "ligwwlyg",
    });
    const img_url = uploadedResp.secure_url;
    const addProd = await product.create({
      name,
      desc,
      price,
      catId,
      prodImg: img_url,
    });

    return res.status(200).json({ error: false, product: addProd });
  } catch (error) {
    console.log(error);
  }
};
module.exports.getCatProds = async (req, res) => {
  try {
    const { id } = req.params;
    const getCatProducts = await product
      .find({
        catId: id,
      })
      .populate({ path: "catId" });
    return res.status(200).json({ error: false, getCatProducts });
  } catch (error) {
    console.error(error);
  }
};
module.exports.getProdDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const getDetail = await product.findById(id);
    return res.status(200).json(getDetail);
  } catch (error) {
    console.error(error);
  }
};
module.exports.updateProduct = async (req, res) => {
  try {
    const { name, desc, price, catId, prodImg } = req.body;
    const { id } = req.params;

    if (prodImg !== "") {
      const uploadedResp = await cloudinary.uploader.upload(prodImg, {
        upload_preset: "ligwwlyg",
      });
      const img_url = uploadedResp.secure_url;
      const updateProd = await product.findByIdAndUpdate(id, {
        name,
        desc,
        price,
        catId,
        prodImg: img_url,
      });
      return res.status(200).json({ error: false, product: updateProd });
    } else {
      const updateProd = await product.findByIdAndUpdate(id, {
        name,
        desc,
        price,
        catId,
      });
      return res.status(200).json({ error: false, product: updateProd });
    }
  } catch (error) {
    console.error(error);
  }
};
module.exports.delProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProd = await product.findByIdAndDelete(id);
    if (deletedProd) {
      return res.status(200).json("Product Deleted");
    }
  } catch (error) {
    console.error(error);
  }
};

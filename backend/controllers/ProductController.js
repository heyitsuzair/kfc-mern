const product = require("../models/ProductModel");
const category = require("../models/CategoryModel");
module.exports.addProduct = async (req, res) => {
  try {
    const { name, desc, price, catId, prodImg } = req.body;

    const addProd = await product.create({ name, desc, price, catId, prodImg });

    res.status(200).json({ error: false, product: addProd });
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
    res.status(200).json({ error: false, getCatProducts });
  } catch (error) {
    console.error(error);
  }
};

const product = require("../models/ProductModel");
module.exports.addProduct = async (req, res) => {
  try {
    const { name, desc, price, catId, prodImg } = req.body;

    const addProd = await product.create({ name, desc, price, catId, prodImg });

    res.status(200).json({ error: false, product: addProd });
  } catch (error) {
    console.log(error);
  }
};

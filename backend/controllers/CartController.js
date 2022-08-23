const cart = require("../models/CartModel");

module.exports.addToCart = async (req, res) => {
  try {
    const { prod_id, quantity, addons, softDrinks } = req.body;
    const add = await cart.create({ prod_id, quantity, addons, softDrinks });
    return res.status(200).json({ error: false, add });
  } catch (error) {
    console.error(error);
  }
};

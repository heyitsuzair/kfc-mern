const cart = require("../models/CartModel");

module.exports.addToCart = async (req, res) => {
  try {
    const { prod_id, quantity, email, addons, softDrinks } = req.body;
    const add = await cart.create({
      prod_id,
      quantity,
      email,
      addons,
      softDrinks,
    });
    if (add) {
      return res.status(200).json({ error: false });
    }
  } catch (error) {
    console.error(error);
  }
};

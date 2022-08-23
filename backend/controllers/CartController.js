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
module.exports.getCartInfo = async (req, res) => {
  try {
    const { email } = req.params;
    // count total items available in cart
    const totalItems = await cart.find({ email }).count();

    // get all items available in cart
    const items = await cart.find({ email });

    return res.status(200).json({ totalItems, items });
  } catch (error) {
    console.error(error);
  }
};

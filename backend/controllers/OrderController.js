const order = require("../models/OrderModel");

module.exports.addOrder = async (req, res) => {
  try {
    const {
      amount,
      totalItems,
      product,
      email,
      paymentStatus,
      payment_method,
      address,
      phone_no,
    } = req.body;
    const add = await order.create({
      product: product,
      email,
      paymentStatus,
      amount,
      totalItems,
      payment_method,
      address,
      phone_no,
    });

    return res.status(200).json({ error: false });
  } catch (error) {
    console.error(error);
  }
};
module.exports.getCustomerOrders = async (req, res) => {
  try {
    const { email } = req.params;

    const find = await order.find({ email });

    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
  }
};

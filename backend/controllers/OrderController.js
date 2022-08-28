const order = require("../models/OrderModel");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY);

module.exports.addOrder = async (req, res) => {
  try {
    const {
      amount,
      totalItems,
      product,
      email,
      payment_method,
      address,
      phone_no,
    } = req.body;

    if (payment_method === "Credit/Debit Card") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: product.map((item) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: "KFC Payment",
              },
              unit_amount: amount + 50 + "00",
            },

            description: `${item.product.title} x ${item.quantity}`,
            quantity: 1,
          };
        }),
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/fail",
      });

      return res.status(200).json({
        error: false,
        url: session.url,
        data: {
          amount,
          totalItems,
          product: product,
          email,
          payment_method,
          address,
          phone_no,
          paymentStatus: "pending",
        },
      });
    } else {
      const paymentStatus = "Pending";
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
    }
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
module.exports.success = async (req, res) => {
  try {
    const {
      amount,
      totalItems,
      product,
      email,
      payment_method,
      address,
      phone_no,
    } = req.body;
    const paymentStatus = "Completed";
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

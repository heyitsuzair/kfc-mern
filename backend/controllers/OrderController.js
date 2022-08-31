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
      stripeData,
    } = req.body;

    if (payment_method === "Credit/Debit Card") {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: stripeData.map((item) => {
          return {
            price_data: {
              currency: "pkr",
              product_data: {
                name: item.title,
                images: [item.src],
              },
              unit_amount: item.price + "00",
            },

            description: `${item.title} x ${item.quantity}`,
            quantity: item.quantity,
          };
        }),
        success_url: process.env.PORT
          ? "https://kfc-mern-uzair.herokuapp.com/success"
          : "http://localhost:3000/success",
        cancel_url: process.env.PORT
          ? "https://kfc-mern-uzair.herokuapp.com/fail"
          : "http://localhost:3000/fail",
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
          paymentStatus: "Pending",
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

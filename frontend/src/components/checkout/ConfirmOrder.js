import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import { toast } from "react-toastify";
import paymentContext from "../../context/paymentContext";
import { useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../../redux/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

export default function ConfirmOrder({ phoneValue }) {
  const dispatch = useDispatch();

  const { cartItems, totalItems, amount } = useSelector((store) => store.cart);
  const navigate = useNavigate();

  // get logged in user locations and check whether it is added or not
  const location_context = useContext(locationContext);
  const { locations, radioValue } = location_context;

  // get payment method and check whether it is selected or not
  const payment_context = useContext(paymentContext);
  const { paymentMethod } = payment_context;

  // use the below state for stripe payment data
  const [stripeData, setStripeData] = useState([]);

  // handle when clicked on back
  const handleBack = () => {
    navigate("/cart");
  };
  // handle when clicked on confirm order
  const handleConfirm = async (stripeData) => {
    if (locations.length < 1) {
      toast.error("Please Add Location To Continue!");
      return;
    } else if (radioValue.value === "") {
      toast.error("Please Choose Location To Continue!");
      return;
    } else if (paymentMethod.value === "") {
      toast.error("Please Choose Payment Method To Continue!");
      return;
    } else if (phoneValue === "") {
      toast.error("Please Enter Your Phone Number!");
      return;
    } else if (phoneValue.length !== 11) {
      toast.error("Phone Number Must Contain 11 Digits!");
      return;
    }

    toast.warning("Please Wait....");

    const getUser = JSON.parse(localStorage.getItem("user"));

    //add delivery charges in amount

    let total = amount + 50;

    // call the api and save the order in mongodb
    const data = {
      product: cartItems,
      email: getUser.email,
      amount: total,
      totalItems,
      stripeData,
      payment_method: paymentMethod.value,
      address: radioValue.value,
      phone_no: phoneValue,
    };
    // calling api
    await axios
      .post(process.env.REACT_APP_BACKEND + "/api/order/addOrder", data)
      .then((res) => {
        if (res.data.error === false) {
          if (res.data.url) {
            localStorage.setItem("payment", JSON.stringify(res.data.data));
            window.open(res.data.url, "_self");
            return;
          }
          dispatch(clearCart());
          toast.success("Order Placed!");
        }
      });
  };
  useEffect(() => {
    setStripeData([]);
    // custom object for stripe payment
    cartItems.forEach((cart, index) => {
      setStripeData((stripeData) => [
        ...stripeData,
        {
          title: cart.product.title,
          src: cart.product.src,
          price: cart.product.price,
          quantity: cart.quantity,
        },
      ]);
      cart.addons.forEach((addon) => {
        setStripeData((stripeData) => [
          ...stripeData,
          {
            title: addon.addon.name,
            src: addon.addon.pic,
            price: addon.addon.price,
            quantity: addon.quantity,
          },
        ]);
      });
      cart.softDrinks.forEach((soft) => {
        setStripeData((stripeData) => [
          ...stripeData,
          {
            title: soft.softDrink.name,
            src: soft.softDrink.pic,
            price: soft.softDrink.price,
            quantity: soft.quantity,
          },
        ]);
      });
    });
    setStripeData((stripeData) => [
      ...stripeData,
      {
        title: "Delivery Charges",
        src: "https://res.cloudinary.com/digaxe3sc/image/upload/v1661757053/kfc-clone/1_gpe30o.png",
        price: 50,
        quantity: 1,
      },
    ]);
    //eslint-disable-next-line
  }, [cartItems]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        sx={{
          borderColor: "white !important",
          color: "white !important",
          borderRadius: "8px",
          padding: ".7rem 2.6rem",
        }}
        variant="outlined"
        onClick={handleBack}
      >
        Back
      </Button>
      <Button
        sx={{
          borderColor: "white !important",
          color: "white !important",
          borderRadius: "8px",
          padding: ".8rem 2.6rem",
          backgroundColor: "#e4002b !important",
          margin: "0 1rem",
        }}
        variant="contained"
        onClick={() => handleConfirm(stripeData)}
      >
        Confirm Order
      </Button>
    </div>
  );
}

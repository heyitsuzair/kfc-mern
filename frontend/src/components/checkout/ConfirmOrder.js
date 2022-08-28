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

  // handle when clicked on back
  const handleBack = () => {
    navigate("/cart");
  };
  // handle when clicked on confirm order
  const handleConfirm = async () => {
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

    const getUser = JSON.parse(localStorage.getItem("user"));

    // call the api and save the order in mongodb
    const data = {
      product: cartItems,
      email: getUser.email,
      amount,
      totalItems,
      payment_method: paymentMethod.value,
      address: radioValue.value,
      phone_no: phoneValue,
    };
    toast.warning("Please Wait....");
    // calling api
    await axios
      .post(process.env.REACT_APP_BACKEND + "/api/order/addOrder", data)
      .then((res) => {
        if (res.data.error === false) {
          if (res.data.url) {
            localStorage.setItem("payment", JSON.stringify(res.data.data));
            window.open(res.data.url, "_self");
          }
          dispatch(clearCart());
          toast.success("Order Placed!");
        }
      });
  };

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
        onClick={handleConfirm}
      >
        Confirm Order
      </Button>
    </div>
  );
}

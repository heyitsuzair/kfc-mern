import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/commons/Spinner";
import { clearCart } from "../redux/cart/cartSlice";

export default function Success() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fulfillOrder = async () => {
    await axios
      .post(
        process.env.REACT_APP_BACKEND + "/api/order/success",
        JSON.parse(localStorage.getItem("payment"))
      )
      .then((res) => {
        if (res.data.error === false) {
          toast.success("Order Placed");
          dispatch(clearCart());
          navigate("/");
          localStorage.removeItem("payment");
        }
      });
  };

  useEffect(() => {
    if (!localStorage.getItem("payment")) {
      navigate("/");
    }
    fulfillOrder();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Spinner />
    </>
  );
}

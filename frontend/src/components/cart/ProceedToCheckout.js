import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export default function ProceedToCheckout() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="proceed-to-checkout">
      <div className="subtotal-parent">
        <span>Subtotal</span>
        <strong className="subtotal">Rs {amount}</strong>
      </div>
      <Link to="/delivery" style={{ textDecoration: "none" }}>
        <Button variant="contained">Proceed To Checkout</Button>
      </Link>
    </div>
  );
}

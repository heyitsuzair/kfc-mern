import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProceedToCheckout() {
  return (
    <div className="proceed-to-checkout">
      <div className="subtotal-parent">
        <span>Subtotal</span>
        <strong className="subtotal">Rs 550</strong>
      </div>
      <Link to="/delivery" style={{ textDecoration: "none" }}>
        <Button variant="contained">Proceed To Checkout</Button>
      </Link>
    </div>
  );
}

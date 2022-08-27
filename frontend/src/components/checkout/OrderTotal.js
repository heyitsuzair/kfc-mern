import React from "react";
import { useSelector } from "react-redux";

export default function OrderTotal() {
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="order-total">
      <div className="total">
        <strong>Delivery</strong>
        <span>Rs 50</span>
      </div>
      <div className="total order-items">
        <strong>Order Items</strong>
        <span>Rs {amount}</span>
      </div>
      <div className="total subtotal">
        <strong>Total</strong>
        <span>Rs {amount + 50}</span>
      </div>
    </div>
  );
}

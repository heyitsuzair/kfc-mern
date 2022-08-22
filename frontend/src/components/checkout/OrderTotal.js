import React from "react";

export default function OrderTotal() {
  return (
    <div className="order-total">
      <div className="total">
        <strong>Delivery</strong>
        <span>Rs 50</span>
      </div>
      <div className="total order-items">
        <strong>Order Items</strong>
        <span>Rs 350</span>
      </div>
      <div className="total subtotal">
        <strong>Total</strong>
        <span>Rs 550</span>
      </div>
    </div>
  );
}

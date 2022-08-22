import React from "react";
import OrderItem from "./OrderItem";

export default function OrderSummary() {
  return (
    <div className="order-summary">
      <strong>Order Summary</strong>
      <OrderItem />
      <OrderItem />
    </div>
  );
}

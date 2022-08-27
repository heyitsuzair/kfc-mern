import React from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
export default function OrderSummary() {
  const { cartItems } = useSelector((store) => store.cart);
  return (
    <div className="order-summary">
      <strong>Order Summary</strong>
      {cartItems.map((item, index) => {
        return (
          <div key={index}>
            <OrderItem item={item} />
          </div>
        );
      })}
    </div>
  );
}

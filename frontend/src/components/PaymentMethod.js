import React from "react";
import PaymentMethAvailable from "./PaymentMethAvailable";

export default function PaymentMethod() {
  return (
    <div className="checkout-item">
      <div
        className="delivery-head"
        style={{
          marginBottom: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong>Payment Method</strong>
      </div>
      <PaymentMethAvailable />
    </div>
  );
}

import React, { useState } from "react";
import paymentContext from "./paymentContext";

export default function LocationState({ children }) {
  const [paymentMethod, setPaymentMethod] = useState({
    value: "",
    index: "",
  });
  return (
    <paymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </paymentContext.Provider>
  );
}

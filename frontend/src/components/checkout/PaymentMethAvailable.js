import React, { useContext } from "react";
import paymentContext from "../../context/paymentContext";
import RadioBtn from "../commons/RadioBtn";
export default function PaymentMethAvailable() {
  const context = useContext(paymentContext);
  const { setPaymentMethod, paymentMethod } = context;
  const methods = [
    {
      value: "COD",
    },
    {
      value: "Credit/Debit Card",
    },
  ];
  // handle when clicked on radio button in payment method section
  const handleClick = (index) => {
    setPaymentMethod({ value: methods[index].value, index: index });
  };
  return (
    <>
      {methods.map((method, index) => {
        return (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <RadioBtn
              value={paymentMethod}
              handleClick={handleClick}
              index={index}
            />
            <span>{method.value}</span>
          </div>
        );
      })}
    </>
  );
}

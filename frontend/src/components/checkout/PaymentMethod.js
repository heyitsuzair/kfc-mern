import React from "react";
import { useTranslation } from "react-i18next";
import PaymentMethAvailable from "./PaymentMethAvailable";

export default function PaymentMethod() {
  const { t } = useTranslation();
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
        <strong>{t("paymentMethod")}</strong>
      </div>
      <PaymentMethAvailable />
    </div>
  );
}

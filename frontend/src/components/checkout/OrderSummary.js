import React from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function OrderSummary() {
  // to fetch cart items
  const { cartItems } = useSelector((store) => store.cart);
  const { t } = useTranslation();
  return (
    <div className="order-summary">
      <strong>{t("orderSummary")}</strong>
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

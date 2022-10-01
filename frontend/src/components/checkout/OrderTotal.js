import React from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function OrderTotal() {
  //to fetch total amount
  const { amount } = useSelector((store) => store.cart);

  const { t } = useTranslation();

  return (
    <div className="order-total">
      <div className="total">
        <strong>{t("deliveryBtn")}</strong>
        <span>Rs 50</span>
      </div>
      <div className="total order-items">
        <strong>{t("items")}</strong>
        <span>Rs {amount}</span>
      </div>
      <div className="total subtotal">
        <strong>{t("total")}</strong>
        <span>Rs {amount + 50}</span>
      </div>
    </div>
  );
}

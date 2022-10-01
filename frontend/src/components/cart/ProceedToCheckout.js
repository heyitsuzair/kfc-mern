import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
export default function ProceedToCheckout() {
  const { t } = useTranslation();
  const { amount } = useSelector((store) => store.cart);
  return (
    <div className="proceed-to-checkout">
      <div className="subtotal-parent">
        <span>{t("subTotal")}</span>
        <strong className="subtotal">Rs {amount}</strong>
      </div>
      <Link to="/delivery" style={{ textDecoration: "none" }}>
        <Button variant="contained">{t("proceedToCheckout")}</Button>
      </Link>
    </div>
  );
}

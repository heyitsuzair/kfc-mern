import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import OrderHistoryItem from "../components/MyKFC/OrderHistoryItem";
import { useTranslation } from "react-i18next";
export default function OrderHistory() {
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  const location = useLocation();

  // get logged in user orders
  const getCustomerOrder = async (email) => {
    await axios
      .get(
        process.env.REACT_APP_BACKEND + "/api/order/getCustomerOrder/" + email
      )
      .then((res) => setOrders(res.data));
  };

  const { t } = useTranslation();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    getCustomerOrder(user.email);

    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {location.pathname === "/orderHistory" ? (
        <Container>
          <h1>{t("pastOrders")}</h1>
          <div className="order-history">
            {orders.length < 1 ? (
              <span>{t("noOrder")}</span>
            ) : (
              <>
                <Grid container display="flex" justifyContent="space-around">
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>{t("paymentMethod")}</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={4}>
                    <strong>{t("address")}</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={2}>
                    <strong>{t("items")}</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>{t("subTotal")}</strong>
                  </Grid>
                </Grid>
                <div>
                  {orders.map((item, index) => {
                    return <OrderHistoryItem key={index} item={item} />;
                  })}
                </div>
              </>
            )}
          </div>
        </Container>
      ) : (
        <div className="order-history">
          {orders.length < 1 ? (
            <span>{t("noOrder")}</span>
          ) : (
            <>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item md={3} sm={3} xs={3}>
                  <strong>{t("paymentMethod")}</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={4}>
                  <strong>{t("address")}</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={2}>
                  <strong>{t("items")}</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <strong>{t("subTotal")}</strong>
                </Grid>
              </Grid>
              <div>
                {orders.slice(0, 3).map((item, index) => {
                  return <OrderHistoryItem key={index} item={item} />;
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

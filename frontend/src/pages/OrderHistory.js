import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
import OrderHistoryItem from "../components/MyKFC/OrderHistoryItem";
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
          <h1>Order History</h1>
          <div className="order-history">
            {orders.length < 1 ? (
              <span>You Have No Order History Right Now.</span>
            ) : (
              <>
                <Grid container display="flex" justifyContent="space-around">
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>Payment Method</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>Address</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>Items</strong>
                  </Grid>
                  <Grid item md={3} sm={3} xs={3}>
                    <strong>Sub Total</strong>
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
            <span>You Have No Order History Right Now.</span>
          ) : (
            <>
              <Grid container display="flex" justifyContent="space-around">
                <Grid item md={3} sm={3} xs={3}>
                  <strong>Payment Method</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <strong>Address</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <strong>Items</strong>
                </Grid>
                <Grid item md={3} sm={3} xs={3}>
                  <strong>Sub Total</strong>
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
      )}
    </div>
  );
}

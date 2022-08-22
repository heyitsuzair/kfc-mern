import React from "react";
import CartProdItem from "../components/cart/CartProdItem";
import Stepper from "../components/commons/Stepper";
import { Container, Grid } from "@mui/material";
import ProceedToCheckout from "../components/cart/ProceedToCheckout";
import { useEffect } from "react";

export default function Cart() {
  useEffect(() => {
    window.scroll(0, 0);
    //eslint-disable-next-line
  }, []);
  return (
    <Container>
      <div className="cart">
        <Stepper step={1} />
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 3 }}>
          <Grid item className="cart-prod-item" md={8} sm={12} xs={12}>
            <CartProdItem />
            <CartProdItem />
            <CartProdItem />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <ProceedToCheckout />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

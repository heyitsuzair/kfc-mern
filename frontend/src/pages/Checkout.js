import React from "react";
import Stepper from "../components/Stepper";
import { Container, Grid } from "@mui/material";
import DeliveryDetails from "../components/DeliveryDetails";
import OrderSummary from "../components/OrderSummary";
export default function Cart() {
  return (
    <Container>
      <div className="cart">
        <Stepper step={2} />
        <Grid container gap={{ md: 4 }} columnSpacing={{ xs: 0, sm: 0, md: 3 }}>
          <Grid item className="checkout-item" md={7} sm={12} xs={12}>
            <DeliveryDetails />
          </Grid>
          <Grid item className="checkout-item" md={4} sm={12} xs={12}>
            <OrderSummary />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

import React, { useContext } from "react";
import Stepper from "../components/Stepper";
import { Container, Grid } from "@mui/material";
import DeliveryDetails from "../components/DeliveryDetails";
import OrderSummary from "../components/OrderSummary";
import { useEffect } from "react";
import locationContext from "../context/locationContext";
export default function Cart() {
  const context = useContext(locationContext);
  const { getLocations } = context;
  useEffect(() => {
    getLocations();
  }, []);
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

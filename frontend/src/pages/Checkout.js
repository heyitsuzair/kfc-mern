import React, { useContext } from "react";
import Stepper from "../components/Stepper";
import { Container, Grid } from "@mui/material";
import DeliveryDetails from "../components/DeliveryDetails";
import OrderSummary from "../components/OrderSummary";
import { useEffect } from "react";
import locationContext from "../context/locationContext";
import PaymentMethod from "../components/PaymentMethod";
export default function Cart() {
  const context = useContext(locationContext);
  const { getLocations } = context;
  useEffect(() => {
    getLocations();
  }, [getLocations]);
  return (
    <Container>
      <div className="cart">
        <Stepper step={2} />
        <Grid container display="flex" gap={{ md: 4 }}>
          <Grid
            item
            display="flex"
            flexDirection="column"
            md={7}
            sm={12}
            xs={12}
            columnSpacing={{ xs: 0, sm: 0, md: 3 }}
            gap={{ md: 3 }}
          >
            <DeliveryDetails />
            <PaymentMethod />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Grid item className="checkout-item">
              <OrderSummary />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

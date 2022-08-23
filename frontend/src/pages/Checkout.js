import React, { useContext } from "react";
import Stepper from "../components/commons/Stepper";
import { Container, Grid } from "@mui/material";
import DeliveryDetails from "../components/checkout/DeliveryDetails";
import OrderSummary from "../components/checkout/OrderSummary";
import { useEffect } from "react";
import locationContext from "../context/locationContext";
import PaymentMethod from "../components/checkout/PaymentMethod";
import PhoneNumber from "../components/checkout/PhoneNumber";
import ConfirmOrder from "../components/checkout/ConfirmOrder";
import OrderTotal from "../components/checkout/OrderTotal";
export default function Cart() {
  const context = useContext(locationContext);
  const { getLocations } = context;
  const getUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    getLocations(getUser.email);
    // eslint-disable-next-line
  }, []);
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
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
            gap={{ md: 3, sm: 3, xs: 3 }}
          >
            <DeliveryDetails />
            <PaymentMethod />
            <PhoneNumber />
          </Grid>
          <Grid
            item
            md={4}
            sm={12}
            xs={12}
            display="flex"
            flexDirection="column"
            gap={{ md: 4, sm: 4, xs: 3 }}
          >
            <Grid item className="checkout-item">
              <OrderSummary />
            </Grid>
            <Grid item className="checkout-item">
              <OrderTotal />
            </Grid>
            <Grid item>
              <ConfirmOrder />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

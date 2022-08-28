import React from "react";
import { Grid } from "@mui/material";
export default function OrderHistoryItem({ item }) {
  return (
    <Grid
      container
      display="flex"
      justifyContent="space-around"
      marginTop="1rem"
    >
      <Grid item md={3} xs={3} sm={3} textAlign="center">
        <span>{item.payment_method}</span>
      </Grid>
      <Grid item md={3} xs={3} sm={3} textAlign="center">
        <span>{item.address.substr(0, 30)}...</span>
      </Grid>
      <Grid item md={3} xs={3} sm={3} textAlign="center">
        <span>{item.totalItems}</span>
      </Grid>
      <Grid item md={3} xs={3} sm={3} textAlign="center">
        <span>Rs {item.amount}</span>
      </Grid>
    </Grid>
  );
}

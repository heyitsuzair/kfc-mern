import React from "react";
import { Grid } from "@mui/material";
import img from "../images/topsel1.png";

export default function OrderItem() {
  return (
    <Grid
      item
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <div className="order-img">
        <img src={img} width={100} alt="Order" />
      </div>
      <div className="order-item">
        <strong>Rice N Spice</strong>
        <span>Rice N Spice</span>
      </div>
      <div className="order-price">
        <strong>Rs 350</strong>
      </div>
    </Grid>
  );
}

import React from "react";
import { Grid } from "@mui/material";

export default function OrderItem({ item }) {
  return (
    <Grid
      item
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      marginTop={2}
    >
      <div className="order-img">
        <img src={item.product.src} width={100} alt="Order" />
      </div>
      <div className="order-item">
        <strong>{item.product.title}</strong>
        <span>
          Rs {item.product.price} x {item.quantity}
        </span>
      </div>
      <div className="order-price">
        <strong>Rs {item.product.price * item.quantity}</strong>
      </div>
    </Grid>
  );
}

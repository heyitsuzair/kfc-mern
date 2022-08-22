import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function PastOrders() {
  return (
    <Grid
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      display="flex"
    >
      <h1>Past Orders</h1>
      <Link to="/orderHistory" className="view-all">
        View All
      </Link>
    </Grid>
  );
}

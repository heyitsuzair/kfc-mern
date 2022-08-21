import React from "react";
import Stepper from "../components/Stepper";
import { Container, Grid } from "@mui/material";
export default function Cart() {
  return (
    <Container>
      <div className="cart">
        <Stepper step={2} />
        <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }}>
          <Grid item md={8} sm={8} xs={12}>
            hello
          </Grid>
          <Grid item md={4} sm={4} xs={12}>
            hello
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

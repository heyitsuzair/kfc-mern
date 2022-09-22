import React from "react";
import CartProdItem from "../components/cart/CartProdItem";
import Stepper from "../components/commons/Stepper";
import { Container, Grid } from "@mui/material";
import ProceedToCheckout from "../components/cart/ProceedToCheckout";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/");
      return;
    }
    //eslint-disable-next-line
  }, [cartItems]);

  document.title = "Bucket";

  return (
    <Container>
      <div className="cart">
        <Stepper step={1} />
        <Grid container columnSpacing={{ xs: 0, sm: 0, md: 3 }}>
          <Grid item className="cart-prod-item" md={8} sm={12} xs={12}>
            {cartItems.map((item, index) => {
              return <CartProdItem key={index} item={item} />;
            })}
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <ProceedToCheckout />
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

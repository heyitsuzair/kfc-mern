import React, { useEffect } from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import Accordin from "../components/Accordin";
import PastOrders from "../components/PastOrders";
import Favourites from "../components/Favourites";
import { useNavigate } from "react-router-dom";
export default function MyKfc() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
      return;
    }
    //eslint-disable-next-line
  }, []);

  return (
    <Container>
      <div className="my-kfc">
        <div className="hello-sec">
          <Grid container>
            <Grid
              flexDirection="row"
              display="flex"
              gap=".7rem"
              item
              xs={2}
              md={6}
              sm={6}
            >
              <h1>Hello</h1>
              <h1>{user.name}</h1>
            </Grid>
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Accordin />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <PastOrders />
          </Grid>
          <Grid item xs={12} md={12} sm={12}>
            <Favourites />
          </Grid>
        </div>
      </div>
    </Container>
  );
}

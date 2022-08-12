import React from "react";
import { Grid } from "@mui/material";
import FavouritesCard from "./FavouritesCard";
export default function Favourites() {
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Grid container columnSpacing={{ md: 2, xs: 8, sm: 2 }} marginTop="2rem">
        <Grid item md={3} sm={5.8} xs={12} marginBottom="1rem">
          <FavouritesCard />
        </Grid>
        <Grid item md={3} sm={5.8} xs={12} marginBottom="1rem">
          <FavouritesCard />
        </Grid>
        <Grid item md={3} sm={5.8} xs={12} marginBottom="1rem">
          <FavouritesCard />
        </Grid>
        <Grid item md={3} sm={5.8} xs={12} marginBottom="1rem">
          <FavouritesCard />
        </Grid>
        <Grid item md={3} sm={5.8} xs={12} marginBottom="1rem">
          <FavouritesCard />
        </Grid>
      </Grid>
    </div>
  );
}

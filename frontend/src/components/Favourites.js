import React from "react";
import { Grid } from "@mui/material";
import FavouritesCard from "./FavouritesCard";
export default function Favourites() {
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Grid container marginTop="2rem">
        <Grid item>
          <FavouritesCard />
        </Grid>
      </Grid>
    </div>
  );
}

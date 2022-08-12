import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

export default function Card({ src, title, desc, price }) {
  return (
    <Grid className="grid-item" item>
      <Link to="/product/12" className="card-link">
        <div className="add-to-fav" style={{ textAlign: "right" }}>
          <FavoriteBorder sx={{ color: "#e4002b" }} />
        </div>
        <div className="card-img">
          <img className="top-sel-img" src={src} alt="Top Selling" />
        </div>
        <h4>{title}</h4>
        <h5>{desc}</h5>
        <div className="card-footer">
          <h2>
            <strong>Rs {price}</strong>
          </h2>
          <strong>
            <Add className="plus-icon" />
          </strong>
          <Button variant="contained" className="add-to-bucket">
            <strong>Add To Bucket</strong>
          </Button>
        </div>
      </Link>
    </Grid>
  );
}

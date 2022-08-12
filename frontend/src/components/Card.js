import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";

export default function Card({ src, title, desc, price, id }) {
  const hour = new Date().getHours();
  return (
    <Grid className="grid-item" item>
      <Link to={hour < 4 ? `/product/${id}` : ""} className="card-link">
        <div className="add-to-fav" style={{ textAlign: "right" }}>
          <FavoriteBorder sx={{ color: "#e4002b" }} />
        </div>
        <div className="card-img">
          <img
            className="top-sel-img"
            width={100}
            src={src}
            alt="Top Selling"
          />
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
          <Button
            variant="contained"
            className="add-to-bucket"
            disabled={hour < 4 ? false : true}
          >
            <strong>Add To Bucket</strong>
          </Button>
        </div>
      </Link>
    </Grid>
  );
}

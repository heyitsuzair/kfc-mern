import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FavoriteBorder } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";

export default function Card({ src, title, desc, price, id, catName }) {
  const hour = new Date().getHours();
  const [btn, setBtn] = useState(null);
  const [link, setLink] = useState("");

  const checkMidnight = () => {
    if (catName === "Midnight") {
      hour < 2 ? setLink(`/product/${id}`) : setLink("");
      hour < 2 ? setBtn(false) : setBtn(true);
    } else {
      setLink(`/product/${id}`);
      setBtn(false);
    }
  };
  useEffect(() => {
    checkMidnight();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className="grid-item" item>
      <Link to={link} className="card-link">
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
        <h5>{desc.substring(0, 50)} ...</h5>
        <div className="card-footer">
          <h2>
            <strong>Rs {price}</strong>
          </h2>
          <strong>
            <Add className="plus-icon" />
          </strong>
          <Button variant="contained" className="add-to-bucket" disabled={btn}>
            <strong>Add To Bucket</strong>
          </Button>
        </div>
      </Link>
    </Grid>
  );
}
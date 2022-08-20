import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import userContext from "../context/userContext";
import axios from "axios";

export default function Card({ src, title, desc, price, id, catName }) {
  const hour = new Date().getHours();
  const [btn, setBtn] = useState(null);
  const [link, setLink] = useState("");
  const context = useContext(userContext);
  const { user } = context;
  const [isFav, setIsFav] = useState(false);
  const getUser = JSON.parse(localStorage.getItem("user"));

  // check the time if it is midnight or not
  const checkMidnight = () => {
    if (catName === "Midnight") {
      hour < 2 ? setLink(`/product/${id}`) : setLink("");
      hour < 2 ? setBtn(false) : setBtn(true);
    } else {
      setLink(`/product/${id}`);
      setBtn(false);
    }
  };
  // get all favourites of logged in user
  const getFavs = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/fav/getFavs/" + getUser.email)
        .then((res) => {
          const checkFav = res.data.getFav.filter((fav) => {
            return fav.prod_id === id;
          });
          checkFav.length > 0 ? setIsFav(true) : setIsFav(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // handle when clicked on bordered heart
  const handleAddFav = (e, id) => {
    setIsFav(true);
    e.preventDefault();
  };

  // handle when clicked on filled heart
  const handleRemoveFav = (e, id) => {
    setIsFav(false);
    e.preventDefault();
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getFavs();
    }
    checkMidnight();
    //eslint-disable-next-line
  }, [user]);

  return (
    <Grid className="grid-item" item>
      <Link to={link} className="card-link">
        <div className="add-to-fav" style={{ textAlign: "right" }}>
          {localStorage.getItem("user") &&
            (isFav === true ? (
              <Favorite
                sx={{ color: "#e4002b" }}
                onClick={(e) => handleRemoveFav(e, id)}
              />
            ) : (
              <FavoriteBorder
                sx={{ color: "#e4002b" }}
                onClick={(e) => handleAddFav(e, id)}
              />
            ))}
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

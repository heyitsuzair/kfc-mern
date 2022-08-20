import React, { useState } from "react";
import { Grid } from "@mui/material";
import FavouritesCard from "./FavouritesCard";
import axios from "axios";
import { useEffect } from "react";
export default function Favourites() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [favs, setFavs] = useState([]);
  // get all favourites of logged in user
  const getFavs = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/fav/getFavs/" + user.email)
        .then((res) => {
          setFavs(res.data.getFav);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // handle when clicked on filled heart
  const handleRemoveFav = async (e, id) => {
    e.preventDefault();
    try {
      // removing the product from favourites of logged in user
      await axios
        .post("http://localhost:5000/api/fav/delFav", {
          prod_id: id,
          email: user.email,
        })
        .then((res) => {
          if (res.data.error === false) {
            const newFavs = favs.filter((fav) => {
              return fav.prod_id._id !== id;
            });
            setFavs(newFavs);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavs();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="favourites">
      <h1>Favourites</h1>
      <Grid
        container
        columnSpacing={{ md: 0, xs: 0, sm: 2 }}
        gap={1.5}
        marginTop="2rem"
      >
        {favs.length < 1 ? (
          <Grid item md={12} sm={12} xs={12} marginBottom="1rem">
            <h4>No Product Found</h4>
          </Grid>
        ) : (
          ""
        )}
        {favs.map((fav, index) => {
          return (
            <div key={index}>
              <Grid item md={12} sm={5.8} xs={12} marginBottom="1rem">
                <FavouritesCard
                  title={fav.prod_id.name}
                  src={fav.prod_id.prodImg}
                  desc={fav.prod_id.desc}
                  price={fav.prod_id.price}
                  id={fav.prod_id._id}
                  handleRemoveFav={handleRemoveFav}
                />
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
}

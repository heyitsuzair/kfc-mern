import React from "react";
import { Grid } from "@mui/material";
import FavouritesCard from "./FavouritesCard";
import axios from "axios";
export default function Favourites({ favs, setFavs }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // handle when clicked on filled heart
  const handleRemoveFav = async (e, id) => {
    e.preventDefault();
    try {
      // removing the product from favourites of logged in user
      await axios
        .post(process.env.REACT_APP_BACKEND + "/api/fav/delFav", {
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

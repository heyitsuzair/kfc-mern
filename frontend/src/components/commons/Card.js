import React, { useContext } from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { Add, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { useState } from "react";
import { useEffect } from "react";
import userContext from "../../context/userContext";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { addToCart } from "../../redux/cart/cartSlice";
import { useTranslation } from "react-i18next";

export default function Card({ src, title, desc, price, id, catName }) {
  const hour = new Date().getHours();
  const dispatch = useDispatch();

  const [addIcon, setAddIcon] = useState();

  const { cartItems } = useSelector((store) => store.cart);

  // use below state to make button disable to check if it is midnight deal or not
  const [btn, setBtn] = useState(null);

  // use below state to make link disable to check if it is midnight deal or not
  const [link, setLink] = useState("");
  const context = useContext(userContext);
  const { user } = context;
  // use below state to mark or unmark product as favourite
  const [isFav, setIsFav] = useState(false);

  // get logged in user
  const getUser = JSON.parse(localStorage.getItem("user"));

  // translation
  const { t } = useTranslation();

  // check the time if it is midnight or not
  const checkMidnight = () => {
    if (catName === "Midnight") {
      // check if it is before or after 2 am
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
        .get(
          process.env.REACT_APP_BACKEND + "/api/fav/getFavs/" + getUser.email
        )
        .then((res) => {
          // filter the incoming response and check whether if this card item of product matches with the id of data or not
          const checkFav = res.data.getFav.filter((fav) => {
            return fav._id === id;
          });
          // check if checkFav returns an array or not, if it returns an array, set this card favourite icon as true else set it to false
          checkFav.length > 0 ? setIsFav(true) : setIsFav(false);
        });
    } catch (error) {
      console.log(error);
    }
  };
  // handle when clicked on bordered heart
  const handleAddFav = async (e, id) => {
    e.preventDefault();
    try {
      // adding the product to favourites of logged in user
      await axios
        .post(process.env.REACT_APP_BACKEND + "/api/fav/addFav", {
          prod_id: id,
          email: getUser.email,
        })
        .then((res) => {
          if (res.data.error === false) {
            setIsFav(true);
          }
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
        .post(process.env.REACT_APP_BACKEND + "/api/fav/delFav", {
          prod_id: id,
          email: getUser.email,
        })
        .then((res) => {
          if (res.data.error === false) {
            setIsFav(false);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // handle When clicked on add to bucket button
  const handleAddToCart = (id, e) => {
    e.preventDefault();

    dispatch(
      addToCart({
        product: { price, title, id, src },
        quantity: 1,
        addons: [],
        softDrinks: [],
        prod_id: id,
      })
    );
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      getFavs();
    }
    checkMidnight();
    // check if product is already available in cart, if it is available show warning else add to cart
    const find = cartItems.find((item) => item.prod_id === id);
    if (find === undefined) {
      setAddIcon(true);
    } else {
      setAddIcon(false);
    }
    //eslint-disable-next-line
  }, [user, cartItems]);

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
          <img className="top-sel-img" src={src} alt="Top Selling" />
        </div>
        <h4>{title}</h4>
        <h5>{desc.substring(0, 50)} ...</h5>
        <div className="card-footer">
          <h2>
            <strong>Rs {price}</strong>
          </h2>
          <strong>
            {addIcon === true ? (
              btn === false ? (
                <Add
                  className="plus-icon"
                  onClick={(e) => handleAddToCart(id, e)}
                />
              ) : (
                ""
              )
            ) : (
              <Edit className="plus-icon" sx={{ color: "#e4002b" }} />
            )}
          </strong>

          {addIcon === true ? (
            <Button
              variant="contained"
              className="add-to-bucket"
              disabled={btn}
              onClick={(e) => handleAddToCart(id, e)}
            >
              <strong>{t("addToBucket")}</strong>
            </Button>
          ) : (
            <Edit className="edit-icon" sx={{ color: "#e4002b" }} />
          )}
        </div>
      </Link>
    </Grid>
  );
}

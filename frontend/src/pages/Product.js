import React, { useState } from "react";

import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ellipse from "../images/bg-ellipse.png";
import AddonCard from "../components/commons/AddonCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import DealSection from "../components/deals/DealSection";
import ProductPageSkeleton from "../components/ProductPageSkeleton";
import { useContext } from "react";
import dealContext from "../context/dealContext";
import DealSkeleton from "../components/deals/DealSkeleton";
import addonContext from "../context/addonContext";
import userContext from "../context/userContext";
import { toast } from "react-toastify";
import SoftDrinkCard from "../components/commons/SoftDrinkCard";
import softDrinkContext from "../context/softDrinkContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  updateCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../redux/cart/cartSlice";

export default function Product() {
  const { cartItems } = useSelector((store) => store.cart);
  const context = useContext(dealContext);
  const { getCats } = context;
  const dispatch = useDispatch();

  // add to bucket text
  const [text, setText] = useState("Add To Bucket");

  // use follow context to get loading and addons to add in cart
  const addon_context = useContext(addonContext);
  const { loading, setLoading, addonQuantity, setAddonQuantity } =
    addon_context;

  // use the follow context to get softdrinks to add in cart
  const softDrinks_context = useContext(softDrinkContext);
  const { softDrinksQuantity, setSoftDrinksQuantity } = softDrinks_context;

  // product detail
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // get user info and check whether it is null or not. If It is null. Dont Allow Add To Bucket
  const userCont = useContext(userContext);
  const { user } = userCont;

  // get product detail when page is loaded
  const getProdDetail = async (prodId) => {
    try {
      await axios
        .get(`http://localhost:5000/api/product/getProd/${prodId}`)
        .then((res) => {
          setDetail(res.data);
          setLoading(false);
        });
    } catch (error) {
      console.error(error);
    }
  };
  //handle when clicked on red button + or -
  const handleClick = (condition) => {
    if (condition === "+") {
      setQuantity(quantity + 1);
      dispatch(increaseItemQuantity(id));
    } else {
      if (quantity === 0) {
        return;
      }
      setQuantity(quantity - 1);
      dispatch(decreaseItemQuantity(id));
    }
  };

  const getUser = JSON.parse(localStorage.getItem("user"));

  // handle When clicked on add to bucket button
  const handleAddToCart = () => {
    if ((!localStorage.getItem("user") && user === "") || user === null) {
      toast.error("You Must Login To Add To Bucket!");
      return;
    }
    if (text === "Save") {
      dispatch(
        updateCartItem({
          product: {
            price: detail.price,
            title: detail.name,
            id,
            src: detail.prodImg,
          },
          quantity: quantity,
          email: getUser.email,
          addons: addonQuantity,
          softDrinks: softDrinksQuantity,
          prod_id: id,
        })
      );
    } else {
      dispatch(
        addToCart({
          product: {
            price: detail.price,
            title: detail.name,
            id,
            src: detail.prodImg,
          },
          quantity: quantity,
          email: getUser.email,
          addons: addonQuantity,
          softDrinks: softDrinksQuantity,
          prod_id: id,
        })
      );
    }
  };
  // check if it exist in localStorage or not

  const checkStorage = (prod_id) => {
    const filter = cartItems.filter((item) => {
      return item.prod_id === prod_id;
    });
    if (filter.length > 0) {
      setText("Save");
      setQuantity(filter[0].quantity);
    } else {
      setText("Add To Bucket");
      setQuantity(1);
    }
  };

  useEffect(() => {
    getCats();
    getProdDetail(id);
    checkStorage(id);

    //eslint-disable-next-line
  }, [id, cartItems]);

  document.title = detail.name === undefined ? "Loading..." : detail.name;
  return (
    <div className="product">
      <Container>
        {loading ? <DealSkeleton /> : <DealSection />}
        {loading ? (
          <ProductPageSkeleton />
        ) : (
          <>
            <div
              className="product-info"
              style={{
                backgroundImage: `url(${ellipse})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition:
                  window.innerWidth <= 991 ? "-65% -115px" : "-6% -117px",
                marginBottom: window.innerWidth <= 768 ? "32px" : "",
                backgroundSize: window.innerWidth <= 768 ? "contain" : "",
              }}
            >
              <Box sx={{ width: "100%", marginBottom: "10rem" }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    justifyContent="center"
                    alignItems="center"
                    textAlign="center"
                  >
                    <div className="product-img">
                      <img src={detail.prodImg} width={300} alt="Deal" />
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <div className="product-info-inner">
                      <div className="info">
                        <h1>{detail.name}</h1>
                        <span>{detail.desc}</span>
                        <h2>
                          <strong>Rs {detail.price}</strong>
                        </h2>
                        <div className="input-div">
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Button
                              variant="contained"
                              className="addcartp"
                              onClick={() => handleClick("-")}
                            >
                              <h1>-</h1>
                            </Button>
                            <div className="quantity">
                              <span>{quantity}</span>
                            </div>
                            <Button
                              variant="contained"
                              className="addcartp"
                              onClick={() => handleClick("+")}
                            >
                              <h1>+</h1>
                            </Button>
                          </div>
                          <div>
                            <Button
                              variant="contained"
                              className="add-to-bucket"
                              onClick={() => handleAddToCart()}
                            >
                              {text}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </div>
            <Box>
              <Grid
                container
                marginBottom={30}
                columnSpacing={{ xs: 3, sm: 3, md: 3 }}
              >
                <Grid item sm={6} xs={12} md={4}>
                  <AddonCard title="Add Ons" prod_id={id} />
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                  <SoftDrinkCard title="Add a Soft Drink" prod_id={id} />
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

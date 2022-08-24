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
import cartContext from "../context/cartContext";
import SoftDrinkCard from "../components/commons/SoftDrinkCard";
import softDrinkContext from "../context/softDrinkContext";

export default function Product() {
  const context = useContext(dealContext);
  const { getCats } = context;

  // use follow context to get loading and addons to add in cart
  const addon_context = useContext(addonContext);
  const { loading, setLoading, addonQuantity } = addon_context;

  // use the follow context to get softdrinks to add in cart
  const softDrinks_context = useContext(softDrinkContext);
  const { softDrinksQuantity } = softDrinks_context;

  // product detail
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // use the following context to add to bucket
  const cartCont = useContext(cartContext);
  const { addToCart } = cartCont;

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
    const newValue = condition === "+" ? quantity + 1 : quantity - 1;
    setQuantity(newValue);
  };

  // get logged in user detail
  const getUser = JSON.parse(localStorage.getItem("user"));

  // handle When clicked on add to bucket button
  const handleAddToCart = (id) => {
    if (!localStorage.getItem("user") && user === "") {
      toast.error("You Must Login To Add To Bucket");
      return;
    }
    addToCart(id, quantity, getUser.email, addonQuantity, softDrinksQuantity);
  };

  useEffect(() => {
    getCats();
    getProdDetail(id);

    window.scroll(0, 0);
    //eslint-disable-next-line
  }, []);
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
                              onClick={() => handleAddToCart(id)}
                            >
                              Add To Bucket
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
                  <AddonCard title="Add Ons" />
                </Grid>
                <Grid item sm={6} xs={12} md={4}>
                  <SoftDrinkCard title="Add a Soft Drink" />
                </Grid>
              </Grid>
            </Box>
          </>
        )}
      </Container>
    </div>
  );
}

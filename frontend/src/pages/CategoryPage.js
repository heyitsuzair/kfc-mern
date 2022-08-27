import React, { useContext, useEffect, useState } from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../components/commons/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import DealSection from "../components/deals/DealSection";
import CategoryPageSkeleton from "../components/deals/CatergoryPageSkeleton";
import softDrinkContext from "../context/softDrinkContext";
import addonContext from "../context/addonContext";

export default function CategoryPage() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const softDrink_context = useContext(softDrinkContext);
  const addon_context = useContext(addonContext);

  const { setAddonQuantity } = addon_context;
  const { setSoftDrinksQuantity } = softDrink_context;

  // get all category products
  const getCatProds = async () => {
    await axios
      .get(process.env.REACT_APP_BACKEND + `/api/product/getCatProds/${id}`)
      .then((res) => {
        setProducts(res.data.getCatProducts);
        setLoading(false);
      });
    //eslint-disable-next-line
  };
  useEffect(() => {
    setLoading(true);
    getCatProds();
    window.scroll(0, 0);
    setAddonQuantity([]);
    setSoftDrinksQuantity([]);
    //eslint-disable-next-line
  }, [id]);
  document.title = products[0] === undefined ? "Deals" : products[0].catId.name;
  return (
    <>
      <Container>
        <DealSection />

        <div className="cat-container">
          {loading ? (
            <CategoryPageSkeleton />
          ) : (
            <>
              <h2>{products[0].catId.name}</h2>
              <div className="cat-cards">
                <Box marginTop={6}>
                  <Grid
                    className="grid"
                    container
                    columnGap={{ xs: 0, sm: 4, md: 3 }}
                    gap={1}
                  >
                    {products.map((prod, index) => {
                      return (
                        <Grid key={index} item md={2.8} sm={5} xs={12}>
                          <Card
                            key={index}
                            title={prod.name}
                            desc={prod.desc}
                            price={prod.price}
                            src={prod.prodImg}
                            id={prod._id}
                            catName={prod.catId.name}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </div>
            </>
          )}
        </div>
      </Container>
    </>
  );
}

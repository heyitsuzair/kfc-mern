import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import axios from "axios";
import CategoryPageSkeleton from "../components/CatergoryPageSkeleton";
export default function CategoryPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const getCatProds = async () => {
    await axios
      .get(`http://localhost:5000/api/product/getCatProds/${id}`)
      .then((res) => {
        setProducts(res.data.getCatProducts);
        setLoading(false);
      });
  };
  useEffect(() => {
    getCatProds();
    window.scroll(0, 0);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Container>
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
                    gridTemplateColumns={{ xs: 4, sm: 12, md: 4 }}
                    columnGap={{ xs: 1, sm: 1, md: 4 }}
                    gap={1}
                  >
                    {products.map((prod, index) => {
                      return (
                        <Card
                          key={index}
                          title={prod.name}
                          desc={prod.desc}
                          price={prod.price}
                          src={prod.prodImg}
                          id={prod._id}
                        />
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

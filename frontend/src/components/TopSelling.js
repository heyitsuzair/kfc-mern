import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "./commons/Card";
import axios from "axios";

export default function TopSelling() {
  const [topSell, setTopSell] = useState([]);

  // get all category products
  const getTopSelling = async () => {
    await axios
      .get(
        process.env.REACT_APP_BACKEND +
          `/api/product/getCatProds/62f64aa88383b6a625ff579d`
      )
      .then((res) => {
        setTopSell(res.data.getCatProducts);
      });
    //eslint-disable-next-line
  };

  React.useEffect(() => {
    getTopSelling();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="top-selling">
      <h2 style={{ textAlign: window.innerWidth < 768 ? "center" : "" }}>
        Top Selling
      </h2>
      <div className="card">
        <div className="cat-cards">
          <Box marginTop={6}>
            <Grid
              className="grid"
              container
              columnGap={{ xs: 0, sm: 4, md: 3 }}
              gap={1}
              justifyContent={{
                sm: "center",
                xs: "center",
                md: "flex-start",
              }}
            >
              {topSell.slice(0, 4).map((prod, index) => {
                return (
                  <Grid key={index} item md={2.8} sm={5} xs={10}>
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
      </div>
    </div>
  );
}

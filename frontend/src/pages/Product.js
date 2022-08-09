import React from "react";
import Deals from "../components/Deals";

import deal1 from "../images/deal1.png";
import deal2 from "../images/deal2.png";
import deal3 from "../images/deal3.png";
import deal4 from "../images/deal4.png";
import deal5 from "../images/deal5.png";
import deal6 from "../images/deal6.png";
import { Container } from "@mui/system";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ellipse from "../images/bg-ellipse.png";
import topSel1 from "../images/topsel1.png";
export default function Product() {
  return (
    <div className="product">
      <Container>
        <div
          className="deal-container"
          style={{
            marginBottom: ".5rem",
          }}
        >
          <Deals classes={"active"} src={deal1} name="Everyday Value" />
          <Deals src={deal2} name="Ala-carte & Combos" />
          <Deals src={deal3} name="Signature Boxes" />
          <Deals src={deal4} name="Sharing" />
          <Deals src={deal5} name="Snacks & Beverages" />
          <Deals src={deal6} name="Midnight" />
        </div>
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
                  <img src={topSel1} width={300} alt="Deal" />
                </div>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <div className="product-info-inner">
                  <div className="info">
                    <h1>Krunch Burger</h1>
                    <span>1 Krunch Burger</span>
                    <h2>
                      <strong>Rs 220</strong>
                    </h2>
                    <div className="input-div">
                      <div>
                        <Button variant="contained" className="addcartp">
                          <h1>-</h1>
                        </Button>
                        <span>1</span>
                        <Button variant="contained" className="addcartp">
                          <h1>+</h1>
                        </Button>
                      </div>
                      <div>
                        <Button variant="contained" className="add-to-bucket">
                          <h4>Add To Bucket</h4>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Container>
    </div>
  );
}

import * as React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import topsel1 from "../images/topsel1.png";
import topsel2 from "../images/topsel2.png";
import topsel3 from "../images/topsel3.png";
import topsel4 from "../images/topsel4.png";
import Card from "./Card";

export default function TopSelling() {
  return (
    <div className="top-selling">
      <h2>Top Selling</h2>
      <div className="card">
        <Box>
          <Grid
            className="grid"
            container
            gridTemplateColumns={{ xs: 12, sm: 12, md: 12 }}
            gap={1}
            justifyContent="space-between"
          >
            <Card
              title="Krunch Burger"
              desc="1 Krunch Burger"
              price="220"
              src={topsel1}
            />
            <Card
              title="Midnight Deal 3"
              desc="Mighty + RD"
              price="590"
              src={topsel2}
            />
            <Card
              title="Rice N Spice"
              desc="Rice N Spice"
              price="290"
              src={topsel3}
            />
            <Card
              title="Xtreme Duo Box"
              desc="2 Zinger + 2 Pcs HC + Large Fries + 2 RD"
              price="1220"
              src={topsel4}
            />
          </Grid>
        </Box>
      </div>
    </div>
  );
}

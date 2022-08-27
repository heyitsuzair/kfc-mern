import React, { useState } from "react";
import { Grid } from "@mui/material";
import { DeleteOutlined, Add, Remove, Edit } from "@mui/icons-material";
import img from "../../images/topsel1.png";
export default function CartProdItem() {
  const [quantity, setQuantity] = useState(1);
  // handle when clicked on plus or minus icon
  const handleQuantity = (condition) => {
    if (condition === "+") {
      setQuantity(quantity + 1);
    } else {
      return quantity === 1 ? true : setQuantity(quantity - 1);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }} className="cart-prod-item">
      <Grid container>
        <Grid
          item
          md={3}
          xs={3}
          sm={6}
          textAlign="center"
          display="flex"
          alignItems="center"
        >
          <img src={img} width={100} alt="" />
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={1}
            textAlign="left"
          >
            <strong>Krunch Burger</strong>
            <span>Rs 220</span>
            <div className="cart-prod-item-quan" style={{ display: "flex" }}>
              <Remove
                sx={{
                  color: "#e4002b",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleQuantity("-")}
              />
              <span style={{ width: "1rem", textAlign: "center" }}>
                {quantity}
              </span>
              <Add
                sx={{
                  color: "#e4002b",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => handleQuantity("+")}
              />
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          md={6}
          sm={2}
          xs={5}
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            <h4>Drinks</h4>
            <span>Mirinda</span>
            <span>x1</span>
          </Grid>
        </Grid>

        <Grid
          item
          md={3}
          xs={3}
          sm={3}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          flexDirection="column"
        >
          <h3 className="cart-item-price">Rs 220</h3>
          <div className="cart-item-icons">
            <Edit sx={{ color: "#e4002b" }} />
            <DeleteOutlined sx={{ color: "#e4002b" }} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

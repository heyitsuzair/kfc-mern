import React, { useState } from "react";
import { Grid } from "@mui/material";
import { DeleteOutlined, Add, Remove, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  delCartItem,
} from "../../redux/cart/cartSlice";
export default function CartProdItem({ item }) {
  const [del, setDel] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // handle when clicked on plus or minus icon
  const handleQuantity = (condition) => {
    if (condition === "+") {
      setDel(false);
      setQuantity(quantity + 1);
      dispatch(increaseItemQuantity(item.prod_id));
    } else {
      dispatch(decreaseItemQuantity(item.prod_id));
      setQuantity(quantity - 1);
      if (item.quantity < 2) {
        setDel(true);
        return;
      }
    }
  };
  //  handle when clicked on delete button
  const removeFromCart = async () => {
    dispatch(delCartItem({ id: item.prod_id, price: item.product.price }));
  };
  return (
    <div style={{ margin: "1rem 0" }} className="cart-prod-item">
      <Grid container>
        <Grid
          item
          md={5}
          xs={7}
          sm={6}
          textAlign="center"
          display="flex"
          alignItems="center"
          gap={{ md: 2, sm: 2, xs: 2 }}
        >
          <img src={item.product.src} width={100} alt="" />
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            gap={1}
            textAlign="left"
          >
            <strong>{item.product.title}</strong>
            <span>Rs {item.product.price}</span>
            <div className="cart-prod-item-quan" style={{ display: "flex" }}>
              {del ? (
                <DeleteOutlined
                  onClick={() => removeFromCart()}
                  sx={{
                    color: "#e4002b",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                />
              ) : (
                <Remove
                  sx={{
                    color: "#e4002b",
                    "&:hover": {
                      cursor: "pointer",
                    },
                  }}
                  onClick={() => handleQuantity("-")}
                />
              )}
              <span style={{ width: "1rem", textAlign: "center" }}>
                {item.quantity}
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
          md={4}
          sm={2}
          xs={3}
          textAlign="center"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Grid
            item
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
          >
            {item.softDrinks.length > 0 ? (
              <>
                <h4>Drinks</h4>
                {item.softDrinks.map((drink, index) => {
                  return (
                    <div key={index} style={{ textAlign: "left" }}>
                      <span>
                        {drink.softDrink.name} x {drink.quantity}
                      </span>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </Grid>
        </Grid>

        <Grid
          item
          md={3}
          xs={2}
          sm={3}
          display="flex"
          alignItems="flex-end"
          justifyContent="center"
          flexDirection="column"
        >
          <h3 className="cart-item-price">
            Rs {item.quantity * item.product.price}
          </h3>
          <div className="cart-item-icons">
            <Link
              to={`/product/${item.prod_id}`}
              style={{ textDecoration: "none" }}
            >
              <Edit sx={{ color: "#e4002b" }} />
            </Link>
            <DeleteOutlined
              onClick={() => removeFromCart()}
              sx={{
                color: "#e4002b",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

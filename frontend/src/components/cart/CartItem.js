import React from "react";
import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  delCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cart/cartSlice";
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  // handle when clicked on plus or minus icon
  const handleQuantity = (condition) => {
    if (condition === "+") {
      dispatch(increaseItemQuantity(item.product.id));
    } else {
      dispatch(decreaseItemQuantity(item.product.id));
    }
  };
  //  handle when clicked on delete button
  const removeFromCart = async () => {
    dispatch(delCartItem({ id: item.product.id, price: item.product.price }));
  };
  return (
    <>
      <Grid
        item
        xs={12}
        md={12}
        sm={12}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        className="cart-item"
        flexDirection="column"
      >
        <div className="cart-item-inner">
          <div style={{ display: "flex", alignItems: "center", gap: "1.3rem" }}>
            <img
              src={item.product.src}
              style={{ marginLeft: "-20px" }}
              width={100}
              alt="Cart Item"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>{item.product.title}</strong>
              <span
                style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
              >
                <Remove
                  sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
                  fontSize="small"
                  onClick={() => handleQuantity("-")}
                />
                <span>{item.quantity}</span>
                <Add
                  sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
                  fontSize="small"
                  onClick={() => handleQuantity("+")}
                />
              </span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <strong>Rs {item.product.price * item.quantity}</strong>
            <DeleteOutline
              sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
              onClick={removeFromCart}
            />
          </div>
        </div>
      </Grid>
    </>
  );
}

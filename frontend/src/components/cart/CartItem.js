import React, { useState } from "react";
import {
  Add,
  Remove,
  DeleteOutline,
  KeyboardArrowDown,
  KeyboardArrowUp,
} from "@mui/icons-material";
import SoftDrinkCard from "../commons/SoftDrinkCard";
import AddonCard from "../commons/AddonCard";
import { Grid, Collapse, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import {
  delCartItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../../redux/cart/cartSlice";
export default function CartItem({ item }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("Down");

  // handle when clicked on plus or minus icon
  const handleQuantity = (condition) => {
    if (condition === "+") {
      dispatch(increaseItemQuantity(item.product.id));
    } else {
      dispatch(decreaseItemQuantity(item.product.id));
    }
  };
  //handle when clicked on arrow icon
  const handleArrowClick = () => {
    open === true ? setOpen(false) : setOpen(true);
    icon === "Down" ? setIcon("Up") : setIcon("Down");
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
            {icon === "Down" ? (
              <KeyboardArrowDown
                sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
                onClick={handleArrowClick}
              />
            ) : (
              <KeyboardArrowUp
                sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
                onClick={handleArrowClick}
              />
            )}
          </div>
        </div>
        <div className="collapse">
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Grid
                container
                columnSpacing={{ xs: 0, sm: 0, md: 0 }}
                display="flex"
                flexDirection="column"
              >
                <Grid item sm={12} xs={12} md={12} marginBottom={5}>
                  <AddonCard title="Add Ons" prod_id={item.prod_id} />
                </Grid>
                <hr className="cart-item-hr" />
                <Grid item sm={12} xs={12} md={12} marginBottom={5}>
                  <SoftDrinkCard
                    title="Add a Soft Drink"
                    prod_id={item.prod_id}
                  />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </div>
      </Grid>
    </>
  );
}

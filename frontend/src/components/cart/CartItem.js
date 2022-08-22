import React, { useEffect, useState } from "react";
import img from "../../images/topsel1.png";
import {
  KeyboardArrowDown,
  Add,
  Remove,
  KeyboardArrowUp,
} from "@mui/icons-material";
import { Collapse, Box, Grid } from "@mui/material";
import AddonCard from "../commons/AddonCard";
import { useContext } from "react";
import addonContext from "../../context/addonContext";

export default function CartItem() {
  const context = useContext(addonContext);
  const { addons, softdrinks, getAllAddons, getAllSoftdrinks } = context;
  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("Down");

  // handle when clicked on plus or minus icon
  const handleQuantity = (condition) => {
    if (condition === "+") {
      setQuantity(quantity + 1);
    } else {
      return quantity === 1 ? true : setQuantity(quantity - 1);
    }
  };

  //handle when clicked on arrow icon
  const handleArrowClick = () => {
    open === true ? setOpen(false) : setOpen(true);
    icon === "Down" ? setIcon("Up") : setIcon("Down");
  };

  useEffect(() => {
    getAllAddons();
    getAllSoftdrinks();

    //eslint-disable-next-line
  }, []);

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
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={img}
              style={{ marginLeft: "-20px" }}
              width={100}
              alt="Cart Item"
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <strong>Krunch Burger</strong>
              <span
                style={{ display: "flex", gap: ".5rem", alignItems: "center" }}
              >
                <Remove
                  sx={{ color: "#e4002b", "&:hover": { cursor: "pointer" } }}
                  fontSize="small"
                  onClick={() => handleQuantity("-")}
                />
                <span>{quantity}</span>
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
            <strong>Rs 220</strong>
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
                  <AddonCard title="Add Ons" addons={addons} />
                </Grid>
                <hr className="cart-item-hr" />
                <Grid item sm={12} xs={12} md={12} marginBottom={5}>
                  <AddonCard title="Add a Soft Drink" addons={softdrinks} />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </div>
      </Grid>
    </>
  );
}

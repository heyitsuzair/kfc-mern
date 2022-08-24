import * as React from "react";
import { Box, Drawer, Button, Grid } from "@mui/material";
import { Close } from "@mui/icons-material";
import CartItem from "../cart/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import cartContext from "../../context/cartContext";
import userContext from "../../context/userContext";

export default function TemporaryDrawer() {
  // use the follow context to get cart info
  const context = useContext(cartContext);
  const { getCartInfo, cart } = context;

  // get user state information
  const user_context = useContext(userContext);
  const { user } = user_context;

  // get logged in user info
  const getUser = JSON.parse(localStorage.getItem("user"));

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <>
      <Box className="drawer-main" role="presentation">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Button
              id="bucket-btn"
              variant="outlined"
              sx={{
                bgcolor:
                  !localStorage.getItem("user") && user === ""
                    ? ""
                    : cart.totalItems > 0
                    ? "#e4002b !important"
                    : "",
                borderColor:
                  !localStorage.getItem("user") && user === ""
                    ? ""
                    : cart.totalItems > 0
                    ? "#e4002b !important"
                    : "",
                marginRight: "1rem",
              }}
            >
              {!localStorage.getItem("user") && user === ""
                ? "0"
                : cart.totalItems}
            </Button>
            <strong> Your Bucket</strong>
          </div>
          <div>
            <strong
              style={{ display: "flex", alignItems: "center", gap: ".5rem" }}
            >
              <h3>Rs 220</h3>
              <Close
                sx={{
                  cursor: "pointer",
                }}
                onClick={toggleDrawer("right", false)}
              />
            </strong>
          </div>
        </Box>
        <Box>
          <Grid container>
            <CartItem />
            <CartItem />
          </Grid>
        </Box>

        {/* <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <ShoppingCartOutlined
          sx={{
            fontSize: 80,
            color: "gray",
          }}
        />
        <strong>You haven’t added any items in cart yet</strong>
      </Box> */}
      </Box>
    </>
  );

  useEffect(() => {
    if (!localStorage.getItem("user") || user === null) {
      return;
    }
    getCartInfo(getUser.email);
    // eslint-disable-next-line
  }, [user, cart]);

  return (
    <div className="drawer">
      <React.Fragment key={"right"}>
        <Button
          onClick={toggleDrawer("right", true)}
          id="bucket-btn"
          variant="outlined"
          sx={{
            bgcolor:
              localStorage.getItem("user") === "" && user === ""
                ? ""
                : cart.totalItems > 0
                ? "#e4002b !important"
                : "",
            borderColor:
              localStorage.getItem("user") === "" && user === ""
                ? ""
                : cart.totalItems > 0
                ? "#e4002b !important"
                : "",
          }}
        >
          {!localStorage.getItem("user") && user === "" ? "0" : cart.totalItems}
        </Button>

        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          PaperProps={{
            sx: {
              backgroundColor: "black",
              color: "white",
              padding: "1rem 1rem",
              justifyContent: "space-between",
            },
          }}
          BackdropProps={{
            sx: {
              backgroundColor: "#ffffff4a",
            },
          }}
          className="drawer-cart"
        >
          <div>{list("right")}</div>

          <div className="cart-btn">
            <Link
              to="/cart"
              style={{ textDecoration: "none" }}
              onClick={toggleDrawer("right", false)}
            >
              <Button variant="contained" className="view-cart-btn">
                View Cart
              </Button>
            </Link>
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

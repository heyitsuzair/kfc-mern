import * as React from "react";
import { Box, Drawer, Button, Grid } from "@mui/material";
import { Close } from "@mui/icons-material";
import CartItem from "../cart/CartItem";
import { Link } from "react-router-dom";

export default function TemporaryDrawer() {
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
              sx={{
                border: "2px solid #e4002b !important",
                color: "white",
                fontWeight: "bolder",
                height: "40px",
                marginRight: "1rem",
                transform: "rotateX(45)",
                backgroundColor: "#e4002b !important",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              variant="outlined"
            >
              0
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

  return (
    <div className="drawer">
      <React.Fragment key={"right"}>
        <Button
          onClick={toggleDrawer("right", true)}
          id="bucket-btn"
          variant="outlined"
        >
          0
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

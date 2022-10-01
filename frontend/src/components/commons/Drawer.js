import * as React from "react";
import { Box, Drawer, Button, Grid } from "@mui/material";
import { Close } from "@mui/icons-material";
import CartItem from "../cart/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import userContext from "../../context/userContext";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function TemporaryDrawer() {
  const { cartItems, totalItems, amount } = useSelector((state) => state.cart);

  // get user state information
  const user_context = useContext(userContext);
  const { user } = user_context;

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

  const { t } = useTranslation();

  const list = (anchor) => (
    <>
      <Box className="drawer-main" role="presentation">
        <div className="drawer-header">
          <div>
            <Button
              onClick={toggleDrawer("right", true)}
              id="bucket-btn"
              variant="outlined"
              sx={{
                bgcolor: totalItems >= 1 ? "#e4002b !important" : "",
                borderColor: totalItems >= 1 ? "#e4002b !important" : "",
                marginRight: "1rem",
              }}
            >
              {totalItems}
            </Button>
            <strong>{t("yourBucket")}</strong>
          </div>
          <div>
            <strong
              style={{
                display: "flex",
                alignItems: "center",
                gap: ".5rem",
              }}
            >
              {totalItems >= 1 ? <h3>Rs {amount}</h3> : ""}
              <Close
                sx={{
                  cursor: "pointer",
                }}
                onClick={toggleDrawer("right", false)}
              />
            </strong>
          </div>
        </div>
        {totalItems >= 1 ? (
          <>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "space-between",
              }}
            ></Box>
            <Box>
              <Grid container>
                {cartItems.map((item, index) => {
                  return <CartItem key={index} item={item} />;
                })}
              </Grid>
            </Box>
          </>
        ) : (
          <Box
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
            <strong>{t("emptyBucket")}</strong>
          </Box>
        )}
      </Box>
    </>
  );

  useEffect(() => {
    if (!localStorage.getItem("user") || user === null) {
      return;
    }
  }, [user]);

  return (
    <div className="drawer">
      <React.Fragment key={"right"}>
        <Button
          onClick={toggleDrawer("right", true)}
          id="bucket-btn"
          variant="outlined"
          sx={{
            bgcolor: totalItems >= 1 ? "#e4002b !important" : "",
            borderColor: totalItems >= 1 ? "#e4002b !important" : "",
          }}
        >
          {totalItems}
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
          {totalItems >= 1 ? (
            <div className="cart-btn">
              <Link
                to="/cart"
                style={{ textDecoration: "none" }}
                onClick={toggleDrawer("right", false)}
              >
                <Button variant="contained" className="view-cart-btn">
                  {t("viewBucket")}
                </Button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

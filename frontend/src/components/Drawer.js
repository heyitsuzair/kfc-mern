import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Close, ShoppingCartOutlined } from "@mui/icons-material";

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
    <Box
      sx={{ width: window.innerWidth < 769 ? 550 : 420 }}
      role="presentation"
    >
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
              border: "2px solid white",
              color: "white",
              fontWeight: "bolder",
              height: "40px",
              marginRight: "1rem",
              transform: "rotateX(45)",
              "&:hover": {
                border: "2px solid white",
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
          <strong>
            <Close
              sx={{
                cursor: "pointer",
              }}
              onClick={toggleDrawer("right", false)}
            />
          </strong>
        </div>
      </Box>
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
        <strong>You haven’t added any items in cart yet</strong>
      </Box>
    </Box>
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
            },
          }}
          BackdropProps={{
            sx: {
              backgroundColor: "#ffffff4a",
            },
          }}
        >
          <div>{list("right")}</div>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

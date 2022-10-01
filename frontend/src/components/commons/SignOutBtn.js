import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { PersonOutline, ExitToApp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../context/userContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function AccountMenu() {
  const context = useContext(userContext);
  const { setUser } = context;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignout = () => {
    // set the user to null
    setUser(null);
    // clear the localStorage
    localStorage.removeItem("user");
    // navigate to login
    navigate("/login");
  };
  const user = JSON.parse(localStorage.getItem("user"));

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="My KFC">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 62, height: 62 }} className="signout-btn">
              {user === null ? "" : user.name.substring(0, 1)}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            bgcolor: "#1c1816",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 30,
              width: 10,
              height: 10,
              bgcolor: "#1c1816",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/myKfc" style={{ textDecoration: "none", color: "white" }}>
          <MenuItem
            className="menu-item"
            sx={{ fontFamily: "Poppins !important" }}
          >
            <PersonOutline /> <span>{t("profile")}</span>
          </MenuItem>
        </Link>
        <div onClick={handleSignout}>
          <MenuItem
            className="menu-item"
            sx={{ fontFamily: "Poppins !important", color: "white" }}
          >
            <ExitToApp /> <span>{t("logout")}</span>
          </MenuItem>
        </div>
      </Menu>
    </React.Fragment>
  );
}

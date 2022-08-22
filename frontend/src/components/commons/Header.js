import React from "react";
import logo from "../../images/KFC-Logo-Red.png";
import { Button } from "@mui/material";
import rider from "../../images/1.png";
import { MyLocation } from "@mui/icons-material";
import Modal from "./Modal";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import { useEffect } from "react";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";
import SignOutBtn from "./SignOutBtn";
import userContext from "../../context/userContext";

export default function Header() {
  const context = useContext(locationContext);
  const { getLocation } = context;
  const context2 = useContext(userContext);
  const { user } = context2;

  useEffect(() => {
    getLocation();

    //eslint-disable-next-line
  }, [user, localStorage.getItem("user")]);

  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="KFC" />
          </Link>
        </div>
        <div className="btn-header">
          <Button variant="contained" disableElevation>
            <img src={rider} alt="Rider" />
            <strong style={{ marginLeft: "10px" }}> Delivery</strong>
          </Button>
        </div>
        <div className="select-location-header">
          <Button variant="contained" disableElevation>
            <MyLocation />
            <Modal />
          </Button>
        </div>
      </div>
      <div className="header-inner">
        <Drawer />
        {localStorage.getItem("user") === null ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button variant="contained" className="regLogBtn">
              <strong>Register / Sign In</strong>
            </Button>
          </Link>
        ) : (
          <>
            <SignOutBtn />
          </>
        )}
      </div>
    </div>
  );
}

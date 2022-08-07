import React from "react";
import logo from "../images/KFC-Logo-Red.png";
import { Button } from "@mui/material";
import rider from "../images/1.png";
import { MyLocation } from "@mui/icons-material";
import Modal from "./Modal";

export default function Header({
  longitude,
  latitude,
  setLongitude,
  setLatitude,
}) {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="KFC" />
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
          <Modal
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            longitude={longitude}
            latitude={latitude}
          />
        </Button>
      </div>
    </div>
  );
}

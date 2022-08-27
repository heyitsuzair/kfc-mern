import React from "react";
import Map from "../commons/Map";
import MyKfcLocations from "../MyKFC/MyKfcLocations";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import { Link } from "react-router-dom";

export default function DeliveryDetails() {
  const location_context = useContext(locationContext);
  const { locations } = location_context;

  return (
    <div className="checkout-item">
      <div className="delivery-head" style={{ marginBottom: "1rem" }}>
        <strong>Delivery Details</strong>
      </div>
      <div className="map">
        <Map />
      </div>
      {locations.length > 0 ? (
        <div className="deliver-to">
          <p>Delivering To</p>
          <MyKfcLocations />
        </div>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          You Currently Have No Addresses Added In Profile. Go To
          <Link
            to={"/MyKFC"}
            style={{ textDecoration: "none", color: "#e4002b" }}
          >
            <strong> Profile </strong>
          </Link>
          To Add Addresses!
        </div>
      )}
    </div>
  );
}

import React from "react";
import Map from "./Map";
import MyKfcLocations from "./MyKFC/MyKfcLocations";

export default function DeliveryDetails() {
  return (
    <div>
      <div className="delivery-head" style={{ marginBottom: "1rem" }}>
        <strong>Delivery Details</strong>
      </div>
      <div className="map">
        <Map />
      </div>
      <div className="deliver-to">
        <p>Delivering To</p>
        <MyKfcLocations />
      </div>
    </div>
  );
}

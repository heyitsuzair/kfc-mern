import React from "react";
import Map from "../commons/Map";
import MyKfcLocations from "../MyKFC/MyKfcLocations";
import { useContext } from "react";
import locationContext from "../../context/locationContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DeliveryDetails() {
  const { t } = useTranslation();
  const location_context = useContext(locationContext);
  const { locations } = location_context;

  return (
    <div className="checkout-item">
      <div className="delivery-head" style={{ marginBottom: "1rem" }}>
        <strong>{t("deliveryDetails")}</strong>
      </div>
      <div className="map">
        <Map />
      </div>
      {locations.length > 0 ? (
        <div className="deliver-to">
          <p>{t("deliveringTo")}</p>
          <MyKfcLocations />
        </div>
      ) : (
        <div style={{ marginTop: "1rem" }}>
          {t("noAddress")}
          <Link
            to={"/MyKFC"}
            style={{ textDecoration: "none", color: "#e4002b" }}
          >
            <strong> {t("profile")} </strong>
          </Link>
          {t("toAdd")}
        </div>
      )}
    </div>
  );
}

import React from "react";
import {
  HomeOutlined,
  Delete,
  Edit,
  Apartment,
  BusinessCenterOutlined,
} from "@mui/icons-material";
import axios from "axios";

export default function MyKfcLocations({ locations, setLocations }) {
  const handleDelete = async (id) => {
    await axios
      .post("http://localhost:5000/api/location/delLocation/" + id)
      .then((res) => {
        if (res.data.error === false) {
          const newLocations = locations.filter((location) => {
            return location._id !== id;
          });
          setLocations(newLocations);
        }
      });
  };
  return (
    <div className="my-locations">
      {locations.map((location, index) => {
        return (
          <div key={index} className="my-locations-item">
            <div className="address-icon">
              {location.tag === "0" ? <HomeOutlined /> : ""}
              {location.tag === "1" ? <BusinessCenterOutlined /> : ""}
              {location.tag === "2" ? <Apartment /> : ""}
            </div>
            <div className="address">
              <h3>{location.tag === "0" ? "Home" : ""}</h3>
              <h3>{location.tag === "1" ? "Office" : ""}</h3>
              <h3>{location.tag === "2" ? "Partner" : ""}</h3>
              <span style={{ fontFamily: "Poppins" }}>{location.street}</span>
            </div>
            <div className="edit-address">
              <div
                className="del-add"
                onClick={() => handleDelete(location._id)}
              >
                <Delete />
                Remove
              </div>
              <div className="edit-add">
                <Edit />
                Edit
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

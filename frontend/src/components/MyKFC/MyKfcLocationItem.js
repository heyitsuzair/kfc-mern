import React, { useEffect, useState } from "react";
import {
  HomeOutlined,
  Delete,
  Edit,
  Apartment,
  BusinessCenterOutlined,
} from "@mui/icons-material";
import axios from "axios";

export default function MyKfcLocationItem({
  location,
  setLocations,
  locations,
  setDisplaySections,
  setValue,
  setTagIndex,
  setLocationState,
}) {
  const [address, setAddress] = useState("");
  // handle when clicked on delete buttom
  const handleDelete = async (id) => {
    try {
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
    } catch (error) {
      console.error(error);
    }
  };
  // handle when clicked on edit button
  const handleEdit = async (id) => {
    setDisplaySections({ first: "flex", second: "none" });
    setValue(location.street);
    setTagIndex(parseInt(location.tag));
    setLocationState("edit");
  };
  // get address of locations
  const getAddress = async (lat, lng) => {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=` +
          process.env.REACT_APP_MAP_API_KEY
      )
      .then((res) => {
        setAddress(res.data.results[1].formatted_address);
      });
  };
  useEffect(() => {
    getAddress(location.lat, location.lng);
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <div className="address-icon">
        {location.tag === "0" ? <HomeOutlined /> : ""}
        {location.tag === "1" ? <BusinessCenterOutlined /> : ""}
        {location.tag === "2" ? <Apartment /> : ""}
      </div>
      <div className="address">
        <h3>{location.tag === "0" ? "Home" : ""}</h3>
        <h3>{location.tag === "1" ? "Office" : ""}</h3>
        <h3>{location.tag === "2" ? "Partner" : ""}</h3>
        <span style={{ fontFamily: "Poppins" }}>
          {location.street}, {address.length < 1 ? "Not Available" : address}
        </span>
      </div>
      <div className="edit-address">
        <div className="del-add" onClick={() => handleDelete(location._id)}>
          <Delete />
          Remove
        </div>
        <div className="edit-add" onClick={() => handleEdit(location._id)}>
          <Edit />
          Edit
        </div>
      </div>
    </>
  );
}

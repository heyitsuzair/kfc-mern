import React, { useState } from "react";
import locationContext from "./locationContext";
import axios from "axios";

export default function LocationState({ children }) {
  const [longitude, setLongitude] = useState(69.3451);
  const [latitude, setLatitude] = useState(30.3753);
  const [displaySections, setDisplaySections] = useState({
    first: "none",
    second: "flex",
  });
  const [value, setValue] = useState("");
  const [locations, setLocations] = useState([]);
  // handle tag index to make on active on add location component
  const [tagIndex, setTagIndex] = useState(null);
  const [locationState, setLocationState] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  const [locationId, setLocationId] = useState(null);
  // handle radios values for checout
  const [radioValue, setRadioValue] = useState({ value: "", index: "" });

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };

  // get all locations of logged in user
  const getLocations = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/location/getLocations/" + user.email)
        .then((res) => {
          setLocations(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <locationContext.Provider
      value={{
        getLocation,
        longitude,
        latitude,
        setLatitude,
        setLongitude,
        displaySections,
        setDisplaySections,
        value,
        setValue,
        locations,
        setLocations,
        tagIndex,
        setTagIndex,
        locationState,
        setLocationState,
        locationId,
        setLocationId,
        getLocations,
        radioValue,
        setRadioValue,
      }}
    >
      {children}
    </locationContext.Provider>
  );
}

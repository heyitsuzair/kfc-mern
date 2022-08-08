import React, { useState } from "react";
import locationContext from "./locationContext";

export default function LocationState({ children }) {
  const [longitude, setLongitude] = useState(69.3451);
  const [latitude, setLatitude] = useState(30.3753);
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  };
  return (
    <locationContext.Provider value={{ getLocation, longitude, latitude }}>
      {children}
    </locationContext.Provider>
  );
}

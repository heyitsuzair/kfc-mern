import React, { useState } from "react";
import addonContext from "./addonContext";
import axios from "axios";

export default function LocationState({ children }) {
  const [loading, setLoading] = useState(true);
  const [addons, setAddons] = useState([]);
  const [addonQuantity, setAddonQuantity] = useState([]);
  const getAllAddons = async () => {
    try {
      await axios
        .get(process.env.REACT_APP_BACKEND + "/api/addon/getAddons")
        .then((res) => {
          setAddons(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <addonContext.Provider
      value={{
        loading,
        getAllAddons,
        addons,
        setAddonQuantity,
        addonQuantity,
        setLoading,
      }}
    >
      {children}
    </addonContext.Provider>
  );
}

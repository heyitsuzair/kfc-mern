import React, { useState } from "react";
import addonContext from "./addonContext";
import axios from "axios";

export default function LocationState({ children }) {
  const [loading, setLoading] = useState(true);
  const [addons, setAddons] = useState([]);
  const [addonQuantity, setAddonQuantity] = useState([]);
  const [softdrinks, setSoftdrinks] = useState([]);
  const getAllAddons = async () => {
    await axios.get("http://localhost:5000/api/addon/getAddons").then((res) => {
      setAddons(res.data);
    });
  };
  const getAllSoftdrinks = async () => {
    await axios
      .get("http://localhost:5000/api/softdrink/getSoftdrinks")
      .then((res) => setSoftdrinks(res.data));
    setLoading(false);
  };
  return (
    <addonContext.Provider
      value={{
        loading,
        getAllAddons,
        addons,
        getAllSoftdrinks,
        softdrinks,
        setAddonQuantity,
        addonQuantity,
      }}
    >
      {children}
    </addonContext.Provider>
  );
}

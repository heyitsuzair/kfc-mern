import React, { useState } from "react";
import softDrinkContext from "./softDrinkContext";
import axios from "axios";

export default function LocationState({ children }) {
  const [softDrinks, setSoftDrinks] = useState([]);
  const [softDrinksQuantity, setSoftDrinksQuantity] = useState([]);
  const getAllSoftDrinks = async () => {
    try {
      await axios
        .get("http://localhost:5000/api/softdrink/getSoftdrinks")
        .then((res) => {
          setSoftDrinks(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <softDrinkContext.Provider
      value={{
        getAllSoftDrinks,
        softDrinks,
        setSoftDrinksQuantity,
        softDrinksQuantity,
      }}
    >
      {children}
    </softDrinkContext.Provider>
  );
}

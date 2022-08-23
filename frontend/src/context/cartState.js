import React from "react";
import { useState } from "react";
import cartContext from "./cartContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function LocationState({ children }) {
  //   const [cart, setCart] = useState([]);
  const addToCart = async (product, quantity, email, addons, softDrinks) => {
    try {
      await axios
        .post("http://localhost:5000/api/cart/addToCart/", {
          prod_id: product,
          quantity: quantity,
          email: email,
          addons: addons,
          softDrinks: softDrinks,
        })
        .then((res) => {
          if (res.data.error === false) {
            toast.success("Product Added To Cart!");
          }
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <cartContext.Provider value={{ addToCart }}>
      {children}
    </cartContext.Provider>
  );
}

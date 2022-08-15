import React, { useState } from "react";
import dealContext from "./dealContext";
import axios from "axios";

export default function LocationState({ children }) {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    try {
      await axios.get("http://localhost:5000/api/cat/getCat").then((res) => {
        setCats(res.data.getCategories);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <dealContext.Provider value={{ loading, cats, getCats }}>
      {children}
    </dealContext.Provider>
  );
}

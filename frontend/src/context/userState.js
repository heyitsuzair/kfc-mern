import React, { useState } from "react";
import userContext from "./userContext";

export default function LocationState({ children }) {
  const [user, setUser] = useState();

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}

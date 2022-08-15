import React, { useContext, useEffect } from "react";
import { useState } from "react";
import dealContext from "../context/dealContext";

import DealsCard from "./DealsCard";

export default function DealSection() {
  const context = useContext(dealContext);
  const { cats, getCats } = context;
  const [active, setActive] = useState("");
  // set a deal as active
  const handleActive = (i) => {
    setActive(i);
  };

  useEffect(() => {
    getCats();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="deal-container">
      {cats.map((cat, index) => {
        return (
          <div key={index} onClick={() => handleActive(index)}>
            <DealsCard
              classes={
                index === active
                  ? "active"
                  : active === ""
                  ? handleActive(0)
                  : ""
              }
              src={cat.catPic}
              name={cat.name}
              id={cat._id}
            />
          </div>
        );
      })}
    </div>
  );
}

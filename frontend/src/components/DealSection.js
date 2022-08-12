import React, { useContext } from "react";
import dealContext from "../context/dealContext";

import DealsCard from "./DealsCard";

export default function DealSection() {
  const context = useContext(dealContext);
  const { cats } = context;

  return (
    <div className="deal-container">
      {cats.map((cat, index) => {
        return (
          <div key={index}>
            <DealsCard
              classes={index === 0 ? "active" : ""}
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

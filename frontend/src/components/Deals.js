import React from "react";

export default function Deals({ src, name, classes }) {
  return (
    <div className="deals">
      <div className="deals-inner">
        <div
          className={`deals-image ${classes === undefined ? "" : "active"}`}
          style={{
            border: src === "../images/deal1.png" ? "2px solid white" : "",
          }}
        >
          <img src={src} width={70} alt="Deal" />
        </div>
        <strong>{name}</strong>
      </div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";
export default function Deals({ src, name, classes }) {
  return (
    <div className="deals">
      <Link to="/cat" style={{ color: "white", textDecoration: "none" }}>
        <div className="deals-inner">
          <div
            className={`deals-image ${classes}`}
            style={{
              border: src === "../images/deal1.png" ? "2px solid white" : "",
            }}
          >
            <img src={src} width={70} alt="Deal" />
          </div>
          <strong>{name}</strong>
        </div>
      </Link>
    </div>
  );
}

import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  Add,
  Remove,
} from "@mui/icons-material";
import { useState } from "react";
import AddonItem from "./AddonItem";
export default function AddonCard({ title, addons }) {
  const [show, setShow] = useState("none");
  const [addonQuant, setAddonQuant] = useState([]);
  const [text, setText] = useState({
    text: "View More (3)",
    icon: <KeyboardArrowDown />,
  });
  const handleClick = () => {
    show === "none" ? setShow("flex") : setShow("none");
    text.text === "View More (3)"
      ? setText({
          text: "View Less",
          icon: <KeyboardArrowUp />,
        })
      : setText({
          text: "View More (3)",
          icon: <KeyboardArrowDown />,
        });
  };

  return (
    <Grid className="addons-container">
      <div className="add-ons">
        <h3>{title}</h3>
        <span className="optional">Optional</span>
      </div>
      <div className="addon-item">
        {addons.slice(0, 2).map((addon, index) => {
          return (
            <div className="addon-info" key={index}>
              <AddonItem addon={addon} index={index} />
            </div>
          );
        })}
        {addons.slice(2, 5).map((addon, index) => {
          return (
            <div className="addon-info" key={index} style={{ display: show }}>
              <AddonItem addon={addon} index={index} />
            </div>
          );
        })}
        <div
          className="addon-info"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <div className="addon-view-more" onClick={handleClick}>
            <span className="view-more">
              {text.text}
              {text.icon}
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
}

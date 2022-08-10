import { Grid } from "@mui/material";
import React from "react";
import img from "../images/deal1.png";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
export default function AddonCard({ title }) {
  const [show, setShow] = useState("none");
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
        <div className="addon-info">
          <div className="img">
            <img src={img} alt="Addon" width={30} />
          </div>
          <div className="addon-name">
            <span>Day</span>
            <span className="addon-price">12345</span>
          </div>
          <div className="addon-add">
            <span>+ Add</span>
          </div>
        </div>
        <div className="addon-info">
          <div className="img">
            <img src={img} alt="Addon" width={30} />
          </div>
          <div className="addon-name">
            <span>Day</span>
            <span className="addon-price">12345</span>
          </div>
          <div className="addon-add">
            <span>+ Add</span>
          </div>
        </div>
        <div
          className="addon-info"
          style={{
            display: show,
          }}
        >
          <div className="img">
            <img src={img} alt="Addon" width={30} />
          </div>
          <div className="addon-name">
            <span>Day</span>
            <span className="addon-price">12345</span>
          </div>
          <div className="addon-add">
            <span>+ Add</span>
          </div>
        </div>
        <div
          className="addon-info"
          style={{
            display: show,
          }}
        >
          <div className="img">
            <img src={img} alt="Addon" width={30} />
          </div>
          <div className="addon-name">
            <span>Day</span>
            <span className="addon-price">12345</span>
          </div>
          <div className="addon-add">
            <span>+ Add</span>
          </div>
        </div>
        <div
          className="addon-info"
          style={{
            display: show,
          }}
        >
          <div className="img">
            <img src={img} alt="Addon" width={30} />
          </div>
          <div className="addon-name">
            <span>Day</span>
            <span className="addon-price">12345</span>
          </div>
          <div className="addon-add">
            <span>+ Add</span>
          </div>
        </div>
        <div
          className="addon-info"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <div className="addon-name" onClick={handleClick}>
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

import { Grid } from "@mui/material";
import React from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
export default function AddonCard({ title, addons }) {
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

  const handleAdd = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.nextSibling.style.display = "flex";
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
              <div className="img">
                <img src={addon.pic} alt="Addon" width={30} />
              </div>
              <div className="addon-name">
                <span>{addon.name}</span>
                <span className="addon-price">{addon.price}</span>
              </div>
              <div className="addon-add" onClick={(e) => handleAdd(e)}>
                <span>+ Add</span>
              </div>
              <div className="addon-quantity" style={{ display: "none" }}>
                {addon._id}
              </div>
            </div>
          );
        })}
        {addons.slice(2, 5).map((addon, index) => {
          return (
            <div className="addon-info" key={index} style={{ display: show }}>
              <div className="img">
                <img src={addon.pic} alt="Addon" width={30} />
              </div>
              <div className="addon-name">
                <span>{addon.name}</span>
                <span className="addon-price">{addon.price}</span>
              </div>
              <div className="addon-add" onClick={(e) => handleAdd(e)}>
                <span>+ Add</span>
              </div>
              <div className="addon-quantity" style={{ display: "none" }}>
                {addon._id}
              </div>
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

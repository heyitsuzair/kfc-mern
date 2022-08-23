import { Grid } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useState } from "react";
import SoftDrinkItem from "./SoftDrinkItem";
import softDrinkContext from "../../context/softDrinkContext";

export default function AddonCard({ title }) {
  const [show, setShow] = useState("none");
  // use follow context to get all addons
  const context = useContext(softDrinkContext);
  const { getAllSoftDrinks, softDrinks } = context;
  const [text, setText] = useState({
    text: "View More (3)",
    icon: <KeyboardArrowDown />,
  });
  // handle click on view more and less more
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

  useEffect(() => {
    getAllSoftDrinks();
    //eslint-disable-next-line
  }, []);

  return (
    <Grid className="addons-container">
      <div className="add-ons">
        <h3>{title}</h3>
        <span className="optional">Optional</span>
      </div>
      <div className="addon-item">
        {softDrinks.slice(0, 2).map((softDrink, index) => {
          return (
            <div className="addon-info" key={index}>
              <SoftDrinkItem softDrink={softDrink} index={index} />
            </div>
          );
        })}
        {softDrinks.slice(2, 5).map((softDrink, index) => {
          return (
            <div className="addon-info" key={index} style={{ display: show }}>
              <SoftDrinkItem softDrink={softDrink} index={index} />
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

import React from "react";
import Carousel from "react-material-ui-carousel";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import image1 from "../images/2.png";
import image2 from "../images/3.png";
import image3 from "../images/4.png";

export default function Hero() {
  var items = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ];
  return (
    <>
      <Carousel
        navButtonsAlwaysVisible={true}
        NextIcon={<ArrowForwardIos />}
        PrevIcon={<ArrowBackIos />}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "#e4002b",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            margin: "10px",
            color: "white",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "#e4002b",
          },
        }}
        stopAutoPlayOnHover
        animation="slide"
        duration={400}
      >
        {items.map((item, i) => (
          <div key={i}>
            <img src={item.image} width={1200} alt="Banner" />
          </div>
        ))}
      </Carousel>
    </>
  );
}

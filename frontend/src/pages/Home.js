import React from "react";

import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import Deals from "../components/Deals";

import deal1 from "../images/deal1.png";
import deal2 from "../images/deal2.png";
import deal3 from "../images/deal3.png";
import deal4 from "../images/deal4.png";
import deal5 from "../images/deal5.png";
import deal6 from "../images/deal6.png";
export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Container>
        <Hero />
        <div className="deal-container">
          <Deals classes={"active"} src={deal1} name="Everyday Value" />
          <Deals src={deal2} name="Ala-carte & Combos" />
          <Deals src={deal3} name="Signature Boxes" />
          <Deals src={deal4} name="Sharing" />
          <Deals src={deal5} name="Snacks & Beverages" />
          <Deals src={deal6} name="Midnight" />
        </div>
      </Container>
    </>
  );
}

import React from "react";

import Header from "../components/Header";
import TopBar from "../components/TopBar";
import Hero from "../components/Hero";
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <Container>
        <Hero />
      </Container>
    </>
  );
}

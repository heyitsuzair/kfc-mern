import React, { useEffect, useContext } from "react";

import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import DealSection from "../components/DealSection";

import TopSelling from "../components/TopSelling";
import HeroSkeleton from "../components/HeroSkeleton";
import DealSkeleton from "../components/DealSkeleton";
import dealContext from "../context/dealContext";
export default function Home() {
  const context = useContext(dealContext);
  const { loading, getCats } = context;

  useEffect(() => {
    getCats();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        {loading ? <HeroSkeleton /> : <Hero />}
        {loading ? <DealSkeleton /> : <DealSection />}
        <TopSelling />
      </Container>
    </>
  );
}

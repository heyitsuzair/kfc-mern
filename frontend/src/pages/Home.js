import React, { useEffect, useContext } from "react";

import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import DealSection from "../components/deals/DealSection";
import TopSelling from "../components/TopSelling";
import HeroSkeleton from "../components/HeroSkeleton";
import DealSkeleton from "../components/deals/DealSkeleton";
import dealContext from "../context/dealContext";
import CategoryPageSkeleton from "../components/deals/CatergoryPageSkeleton";

export default function Home() {
  const context = useContext(dealContext);
  const { loading, getCats } = context;

  useEffect(() => {
    // get all the categories
    getCats();
    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Container>
        {loading ? <HeroSkeleton /> : <Hero />}
        {loading ? <DealSkeleton /> : <DealSection />}
        {loading ? <CategoryPageSkeleton /> : <TopSelling />}
      </Container>
    </>
  );
}

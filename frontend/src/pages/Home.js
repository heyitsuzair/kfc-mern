import React, { useEffect, useState } from "react";

import Hero from "../components/Hero";
import Container from "@mui/material/Container";
import Deals from "../components/Deals";

import TopSelling from "../components/TopSelling";
import axios from "axios";
import HeroSkeleton from "../components/HeroSkeleton";
import DealSkeleton from "../components/DealSkeleton";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [cats, setCats] = useState([]);
  const getCats = async () => {
    await axios.get("http://localhost:5000/api/cat/getCat").then((res) => {
      setCats(res.data.getCategories);
      setLoading(false);
    });
  };
  useEffect(() => {
    getCats();
  }, []);
  return (
    <>
      <Container>
        {loading ? <HeroSkeleton /> : <Hero />}
        {loading ? (
          <DealSkeleton />
        ) : (
          <div className="deal-container">
            {cats.map((cat, index) => {
              return (
                <>
                  <Deals
                    classes={index === 0 ? "active" : ""}
                    src={cat.catPic}
                    name={cat.name}
                  />
                </>
              );
            })}
          </div>
        )}

        <TopSelling />
      </Container>
    </>
  );
}

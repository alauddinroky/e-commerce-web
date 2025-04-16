import React from "react";
import { useSelector } from "react-redux";
import DataFilterComponent from "../components/DataFilterComponent";
import HeroSection from "../components/HeroSection";
import NewsLetter from "../components/NewsLetter";
function Home() {
  const data = useSelector((state) => state.item.items);
  return (
    <div>
      <HeroSection/>
      <DataFilterComponent data={data} />
      <NewsLetter />
    </div>
  );
}

export default Home;

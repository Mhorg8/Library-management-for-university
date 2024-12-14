import React from "react";
import Banner from "./components/hero/Banner";
import Features from "./components/hero/Features";
import Charts from "./components/charts/Charts";
import Slider from "./components/slider/Slider";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Charts />
      <Slider />
    </div>
  );
};

export default HomePage;

import React from "react";
import Desinged from "./HomeComponents/Desinged";
import BestSellers from "../../Components/BestSellers";
import Logos from "../../Components/Logos";
import Space from "../../Components/Space";
import Title from "../../Components/Title";
import Slider from "./HomeComponents/Slider";

const Home = () => {
  return (
    <>
      <Slider/>
      <Desinged />
      <Space />
      <Title/>
      <BestSellers />
      <Logos />
    </>
  );
};

export default Home;

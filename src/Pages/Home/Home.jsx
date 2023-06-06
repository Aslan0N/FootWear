import React from "react";
import Desinged from "./HomeComponents/Desinged";
import BestSellers from "../../Components/BestSellers";
import Logos from "../../Components/Logos";
import Space from "../../Components/Space";
import Title from "../../Components/Title";
import Slider from "./HomeComponents/Slider";
import Sale from "../../Components/Sale";

const Home = () => {
  return (
    <>
      <Sale />
      <Slider />
      <Desinged />
      <Space />
      <Title />
      <BestSellers />
      <Logos />
    </>
  );
};

export default Home;

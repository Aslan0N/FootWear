import React from "react";
import BestSellers from "../../Components/BestSellers";
import Logos from "../../Components/Logos";
import MenFirst from "../../Components/MenFirst";
import MenCard from "../../Components/MenCard";
import Space from "../../Components/Space";
import Title from "../../Components/Title";
import Sale from "../../Components/Sale";

const Men = () => {
  return (
    <>
      <Sale />
      <MenFirst />
      <Space />
      <MenCard />
      <Title />
      <BestSellers />
      <Logos />
    </>
  );
};

export default Men;

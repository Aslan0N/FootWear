import React from "react";
import BestSellers from "../../Components/BestSellers";
import Logos from "../../Components/Logos";
import MenFirst from "../../Components/MenFirst";
import MenCard from "../../Components/MenCard";
import Space from "../../Components/Space";
import Title from "../../Components/Title";

const Men = () => {
  return (
    <>
      {" "}
      <MenFirst />
      <Space />
      <MenCard />
      <Title/>
      <BestSellers />
      <Logos />
    </>
  );
};

export default Men;

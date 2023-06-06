import React from "react";
import MenFirst from "../../Components/MenFirst";
import MenCard from "../../Components/MenCard";
import Space from "../../Components/Space";
import Logos from "../../Components/Logos";
import CardsProperties from "./WomenComponents/CardsProperties";
import Sale from "../../Components/Sale";

const Women = () => {
  return (
    <>
      <Sale />
      <MenFirst />
      <Space />
      <MenCard />
      <CardsProperties />
      <Logos />
    </>
  );
};

export default Women;

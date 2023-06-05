import React from 'react'
import MenFirst from '../../Components/MenFirst'
import MenCard from '../../Components/MenCard'
import Space from '../../Components/Space'
import Logos from '../../Components/Logos'
import Properties from './WomenComponents/Properties'
import CardsProperties from './WomenComponents/CardsProperties'

const Women = () => {
  return (
    <>
        <MenFirst/>
        <Space/>
        <MenCard/>
        <CardsProperties/>
        <Logos/>
    </>
  )
}

export default Women
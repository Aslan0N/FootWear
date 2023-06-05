import React from 'react'
import Properties from './Properties'
import BestSellers from '../../../Components/BestSellers'

const CardsProperties = () => {
  return (
    <>
        <section id='cards'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <Properties/>
                    </div>
                    <div className="col-lg-9">
                        <BestSellers/>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CardsProperties
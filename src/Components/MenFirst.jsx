import React from 'react'
// import { GlobalContext } from '../../../Context/GlobalState'

const MenFirst = () => {
    // const [pages] = useContext(GlobalContext)
  return (
    <>
        <section id='first'>
            <div className="first-card">
            <h4>MEN'S</h4>
                <img src="https://preview.colorlib.com/theme/footwear/images/cover-img-1.jpg" alt="" />
                <div className="card-end">
                    <ul>
                        <li>NEW ARRIVALS</li>
                        <li>BEST SELLERS</li>
                        <li>EXTENDED WIDTHS</li>
                        <li>SALE</li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  )
}

export default MenFirst
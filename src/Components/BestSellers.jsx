import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";
import AOS from 'aos';
import { useCart } from "react-use-cart";



const BestSellers = () => {
  const {addItem} = useCart()
  useEffect(()=>{
    AOS.init({
      duration:1000
    });
  }, [])
    const {data} = useContext(GlobalContext);
  return (
    <>
    <section id="bestsellers">
        <div className="container">
        <div className="row g-3">
          {
            data.map((item)=>{
                return (
                    <div className="col-12 col-sm-12 col-md-6 col-lg-4" data-aos="flip-down">
                        <div className="card" key={item.id} style={{ width: "100%", height:"100%" }}>
                            <img src={item.images} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">
                                ${item.price}
                                </p>
                                <button className="btn btn-dark" onClick={()=> addItem(item)}>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                )
            })
            
          }
          <div className="col-11 col-sm-12 col-md-12 col-lg-12">
            <button>Shop All Products</button>
          </div>
        </div>
      </div>
    </section>
      
    </>
  );
};

export default BestSellers;

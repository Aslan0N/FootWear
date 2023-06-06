import React from "react";

const Slider = () => {
  return (
    <>
      {/* <div id="carouselExampleFade" classname="carousel slide carousel-fade">
        <div classname="carousel-inner">
          <div classname="carousel-item active">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/img_bg_1.jpg"
              classname="d-block w-100"
              alt="..."
            />
          </div>
          <div classname="carousel-item">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/img_bg_2.jpg"
              classname="d-block w-100"
              alt="..."
            />
          </div>
          <div classname="carousel-item">
            <img
              src="https://preview.colorlib.com/theme/footwear/images/img_bg_3.jpg"
              classname="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          classname="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span classname="carousel-control-prev-icon" aria-hidden="true">
            <span classname="visually-hidden">Previous</span>
          </span>
        </button>
        <button
          classname="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span classname="carousel-control-next-icon" aria-hidden="true">
            <span classname="visually-hidden">Next</span>
          </span>
        </button>
      </div> */}



  <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://preview.colorlib.com/theme/footwear/images/img_bg_1.jpg" className="d-block w-100" alt="..." />
      <div className="owerlay">
      <h1>MEN'S</h1>
          <span>SHOES</span>
          <p>
          COLLECTION <br />
New trending shoes

          </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/footwear/images/img_bg_2.jpg" className="d-block w-100" alt="..." />
      <div className="owerlay">
      <h1>HUGE</h1>
          <span>SALE</span>
          <p>
          <span><b>50%</b> OFF</span>
          Big sale sandals
          </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://preview.colorlib.com/theme/footwear/images/img_bg_3.jpg" className="d-block w-100" alt="..." />
      <div className="owerlay">
      <h1>HUGE</h1>
          <span>SALE</span>
          <span>ARRIVAL</span>
          <p>
          UP TO <b>30%</b> OFF
          </p>
          <p>New stylish shoes for men</p>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Slider;

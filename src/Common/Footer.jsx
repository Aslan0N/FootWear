import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>ABOUT FOOTWEAR</h5>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic life
              </p>
              <div className="i-con">
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-dribbble"></i>
              </div>
            </div>
            <div className="col">
              <h5>CUSTOMER CARE</h5>
              <ul>
                <li>CONTACT</li>
                <li>RETURNS/EXCHANGE</li>
                <li>GIFT VOUCHER</li>
                <li>WISHLISTSPECIAL</li>
                <li>SPECIAL</li>
                <li>CUSTOMER SERVICES</li>
                <li>SITE MAPS</li>
              </ul>
            </div>
            <div className="col">
              <h5>INFORMATION</h5>
              <ul>
                <li>ABOUT US</li>
                <li>DELIVERY INFORMATION</li>
                <li>PRIVACY POLICY</li>
                <li>SUPPORT</li>
                <li>ORDER TRACKING</li>
              </ul>
            </div>
            <div className="col">
              <h5>NEWS</h5>
              <ul>
                <li>BLOG</li>
                <li>PRESS</li>
                <li>EXHIBITIONS</li>
              </ul>
            </div>
            <div className="col">
              <h5>CONTACT INFORMATION</h5>
              <ul>
                <li>291 SOUTH 21TH STREET, SUITE 721 NEW YORK NY 10016</li>
                <li>+ 1235 2355 98</li>
                <li>INFO@YOURSITE.COM</li>
                <li>YOURSITE.COM</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="end">
          <p>Copyright ©2023 All rights reserved | This template is made with  by <i class="fa-solid fa-heart"></i> Colorlib Demo Images: <span>Unsplash , Pexels.com</span></p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

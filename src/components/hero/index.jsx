import React from "react";
import TimeCountDown from "../countdown";
import hImg1 from "../../images/slider/s1.jpg";
import shape1 from "../../images/slider/shape.svg";

const Hero = () => {
  return (
    <section className="static-hero" id="home">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-6 col-12">
                <div className="toanhuyen-static-hero-inner">
                  <div className="shape-1">
                    <img src={shape1} alt="" />
                  </div>
                  <div data-swiper-parallax="300" className="slide-title">
                    <h2>
                      Toan <span>&</span> Huyen
                    </h2>
                  </div>
                  <div data-swiper-parallax="400" className="slide-text">
                    <p>CHÚNG TÔI SẼ KẾT HÔN Ngày 2 tháng 1 năm 2023</p>
                  </div>
                  <div className="toanhuyen-wedding-date">
                    <div className="clock-grids">
                      <TimeCountDown />
                    </div>
                  </div>
                  <div className="clearfix"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="static-hero-right">
        <div className="static-hero-img">
          <div className="static-hero-img-inner">
            <img src={hImg1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

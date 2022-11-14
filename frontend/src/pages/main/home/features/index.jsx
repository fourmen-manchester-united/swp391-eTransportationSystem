import React from "react";
import Slider from "react-slick";
function Features() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="swiper-button-next next-ft" onClick={onClick}>
        <i className="i-arr"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="swiper-button-prev prev-ft" onClick={onClick}>
        <i className="i-arr"></i>
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="features__sect has-insurance">
      <div className="m-container">
        <h3 className="title-car">Tính năng nổi bật</h3>
        <div className="swiper-container swiper-features swiper-container-horizontal">
          <div
            className="swiper-wrapper feature-item"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <Slider {...settings}>
              <div className="swiper-slide feature-img swiper-slide-active">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-2.2113160d.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide feature-img swiper-slide-next">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-5.96a02632.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide feature-img">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-6.8892dedd.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide feature-img">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-3.81ed6d57.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide feature-img">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-4.38a67502.jpg" alt="" />
                </div>
              </div>
              <div className="swiper-slide feature-img">
                <div className="fix-img" style={{ margin: "0 5px" }}>
                  <img src="assets/images/features-1.49135d20.jpg" alt="" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

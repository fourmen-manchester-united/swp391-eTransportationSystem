import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";

function CarByCity() {
  const { code } = useParams();
  const [listCity, setListCity] = useState([]);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/car/city/${code}`,
      })
        .then((res) => {
          setListCity(res.data);
        })
        .catch((err) => {
          setListCity([]);
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [code]);
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div className="swiper-button-next next-ft" onClick={onClick}>
        <i class="i-arr"></i>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className="swiper-button-prev prev-ft" onClick={onClick}>
        <i class="i-arr"></i>
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
    <div className="car-area__sect">
      <div className="m-container">
        <h3 className="title-car textTransform-uppercase">
          XE NỔI BẬT TẠI {code}
        </h3>
        <div className="swiper-container swiper-perfect-box swiper-container-horizontal">
          <div className="swiper-wrapper box-car__wrap">
            {listCity.length === 0 ? (
              <div> not found</div>
            ) : (
              <Slider {...settings}>
                {listCity.map((city, index) => (
                  <div
                    className="swiper-slide box-car__item"
                    style={{ width: 210, marginRight: 30 }}
                    key={index}
                  >
                    <Link to={`/car-detail/${city.id}`}>
                      <div className="img-car" style={{ margin: "0 5px" }}>
                        <div className="fix-img">
                          <img src={city.carImage} alt={city.name} />
                        </div>
                        <div className="price-car">{city.price}</div>
                        <span className="label-pos" />
                      </div>
                      <div className="desc-car">
                        <h2>{city.name}</h2>
                        <div className="group-line n-rating">
                          <span className="star">
                            <span className="star_rate-num">5.0</span>
                            <div
                              className="star-ratings"
                              title="1 Star"
                              style={{
                                position: "relative",
                                boxSizing: "border-box",
                                display: "inline-block",
                              }}
                            >
                              <div
                                className="star-container"
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  verticalAlign: "middle",
                                }}
                              >
                                <svg
                                  viewBox="0 0 51 48"
                                  className="widget-svg"
                                  style={{
                                    width: 17,
                                    height: 17,
                                    transition: "transform 0.2s ease-in-out 0s",
                                  }}
                                >
                                  <path
                                    className="star"
                                    d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                    style={{
                                      fill: "rgb(0, 165, 80)",
                                      transition: "fill 0.2s ease-in-out 0s",
                                    }}
                                  ></path>
                                </svg>
                              </div>
                            </div>
                          </span>
                          <span className="dot-car">•</span>
                          <span>3 chuyến</span>
                        </div>
                        <div className="location">
                          <p>
                            <i className="ic ic-sm-car-location" />
                            {city.addressInfo}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarByCity;

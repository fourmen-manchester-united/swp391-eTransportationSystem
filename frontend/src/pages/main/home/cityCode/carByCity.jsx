import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import Load from "../../../../components/Load";

function CarByCity() {
  const { code } = useParams();
  const [listCity, setListCity] = useState(null);
  const [listCitys, setListCitys] = useState([]);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/car/city/${code}?page=0&size=0`,
      })
        .then((res) => {
          setListCity(res.data);
        })
        .catch((err) => {
          setListCity([]);
          console.error(err);
        });
    };
    const getAccount = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/city`,
      })
        .then((res) => {
          setListCitys(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    getAccount();
    // eslint-disable-next-line
  }, [code]);
  let name = listCitys.find((listCitys) => listCitys.code === code);
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
    <div className="car-area__sect">
      <div className="m-container">
        <h3 className="title-car textTransform-uppercase">
          XE NỔI BẬT TẠI {name !== undefined && name.name}
        </h3>
        <div className="swiper-container swiper-perfect-box swiper-container-horizontal">
          <div
            className="swiper-wrapper box-car__wrap"
            style={{ textAlign: "center" }}
          >
            {listCity ? (
              <>
                {listCity.length > 0 ? (
                  <>
                    {listCity.length > 4 ? (
                      <Slider {...settings}>
                        {listCity.map((city, index) => (
                          <div
                            className="swiper-slide box-car__item"
                            style={{ width: 210, marginRight: 30 }}
                            key={index}
                          >
                            <Link to={`/car-detail/${city.id}`}>
                              <div
                                className="img-car"
                                style={{ margin: "0 5px" }}
                              >
                                <div className="fix-img">
                                  <img src={city.carImage} alt={city.name} />
                                </div>
                                <div className="price-car">{city.price}</div>
                                <span className="label-pos" />
                              </div>
                              <div className="desc-car">
                                <h2>{city.name}</h2>
                                <div
                                  className="group-line n-rating"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span className="star">
                                    <span className="star_rate-num">
                                      {city.totalRating > 0
                                        ? city.totalRating
                                        : "chưa có đánh giá "}
                                    </span>
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
                                            transition:
                                              "transform 0.2s ease-in-out 0s",
                                          }}
                                        >
                                          <path
                                            className="star"
                                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                            style={{
                                              fill: "rgb(0, 165, 80)",
                                              transition:
                                                "fill 0.2s ease-in-out 0s",
                                            }}
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </span>
                                  <span className="dot-car">•</span>
                                  <span>{city.totalBook} chuyến</span>
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
                    ) : (
                      <div style={{ display: "flex" }}>
                        {listCity.map((city, index) => (
                          <div
                            className="swiper-slide box-car__item"
                            style={{ width: 210, marginRight: 30 }}
                            key={index}
                          >
                            <Link to={`/car-detail/${city.id}`}>
                              <div
                                className="img-car"
                                style={{ margin: "0 5px" }}
                              >
                                <div className="fix-img">
                                  <img src={city.carImage} alt={city.name} />
                                </div>
                                <div className="price-car">{city.price}</div>
                                <span className="label-pos" />
                              </div>
                              <div className="desc-car">
                                <h2>{city.name}</h2>
                                <div
                                  className="group-line n-rating"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <span className="star">
                                    <span className="star_rate-num">
                                      {city.totalRating > 0
                                        ? city.totalRating
                                        : "chưa có đánh giá "}
                                    </span>
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
                                            transition:
                                              "transform 0.2s ease-in-out 0s",
                                          }}
                                        >
                                          <path
                                            className="star"
                                            d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                                            style={{
                                              fill: "rgb(0, 165, 80)",
                                              transition:
                                                "fill 0.2s ease-in-out 0s",
                                            }}
                                          ></path>
                                        </svg>
                                      </div>
                                    </div>
                                  </span>
                                  <span className="dot-car">•</span>
                                  <span> {city.totalBook} chuyến</span>
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
                      </div>
                    )}
                  </>
                ) : (
                  <div>not found</div>
                )}
              </>
            ) : (
              <Load />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarByCity;

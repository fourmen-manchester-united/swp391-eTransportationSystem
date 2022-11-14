import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
function City() {
  const [listCity, setListCity] = useState([]);
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/city`,
      })
        .then((res) => {
          setListCity(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);
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
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="destination__sect ">
      <div className="m-container">
        <h3 className="title-car"> Địa điểm nổi bật</h3>
        <div className="swiper-container swiper-destination swiper-container-horizontal">
          <div
            className="swiper-wrapper dest-item"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {listCity.length === 0 ? (
              <div> not found</div>
            ) : (
              <Slider {...settings}>
                {listCity.map((city, index) => (
                  <div
                    className="swiper-slide dest-img box-car__item swiper-slide-active"
                    key={index}
                  >
                    <Link to={`/city/${city.code}`}>
                      <div className="fix-img" style={{ margin: "0 5px" }}>
                        <img
                          src={city.image}
                          alt="Cho thuê xe tự lái Hồ Chí Minh"
                        />
                        <h3>
                          {city.name}
                          <span>{city.count}+ xe</span>
                        </h3>
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

export default City;

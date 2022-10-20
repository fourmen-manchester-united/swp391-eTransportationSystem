import React from "react";
import { Link } from "react-router-dom";

function CarItem({ listCar }) {
  return (
    <div
      className="swiper-slide box-car__item"
      style={{ width: 210, marginRight: 30 }}
    >
      <Link to={`/car-detail/${listCar.id}`}>
        <div className="img-car">
          <div className="fix-img">
            <img src={listCar.carImage} alt="Cho thuê xe" />
          </div>
          <div className="price-car">{listCar.price}</div>
          <span className="label-pos" />
        </div>
        <div className="desc-car">
          <h2>{listCar.name}</h2>
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
              {listCar.addressInfo}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CarItem;

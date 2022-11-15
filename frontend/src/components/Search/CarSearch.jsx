import React from "react";
import { Link } from "react-router-dom";
import Load from "../Load";

function CarSearch({ carList, onScroll, listInnerRef, loading }) {
  return (
    <div className="module-map">
      <div className="has-list">
        <div className="map-container" onScroll={onScroll} ref={listInnerRef}>
          <div className="listing-car">
            <ul
              style={{
                justifyContent: "center",
              }}
            >
              {carList === null || carList.length === 0 ? (
                <>{!loading ? "không tìm thấy xe" : <Load />}</>
              ) : carList.length > 0 ? (
                carList.map((car, index) => (
                  <li key={index}>
                    <Link to={`/car-detail/${car.id}`}>
                      <div className="item-car">
                        <div className="img-car">
                          <div className="fix-img">
                            <img src={car.carImage} alt="" />
                          </div>
                        </div>
                        <div className="desc-car">
                          <div className="group-line n-price">
                            <h2>{car.name}</h2>
                            <p className="price">
                              <span className="special">{car.price}K</span>
                            </p>
                          </div>
                          <div className="group-line n-rating">
                            <span className="star">
                              <span className="star_rate-num">
                                {car.totalRating > 0
                                  ? car.totalRating
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
                                <svg
                                  className="star-grad"
                                  style={{
                                    position: "absolute",
                                    zIndex: 0,
                                    width: 0,
                                    height: 0,
                                    visibility: "hidden",
                                  }}
                                >
                                  <defs>
                                    <linearGradient
                                      id="starGrad099085309023501"
                                      x1="0%"
                                      y1="0%"
                                      x2="100%"
                                      y2="0%"
                                    >
                                      <stop
                                        offset="0%"
                                        className="stop-color-first"
                                        style={{
                                          stopColor: "rgb(0, 165, 80)",
                                          stopOpacity: 1,
                                        }}
                                      ></stop>
                                      <stop
                                        offset="0%"
                                        className="stop-color-first"
                                        style={{
                                          stopColor: "rgb(0, 165, 80)",
                                          stopOpacity: 1,
                                        }}
                                      ></stop>
                                      <stop
                                        offset="0%"
                                        className="stop-color-final"
                                        style={{
                                          stopColor: "rgb(203, 211, 227)",
                                          stopOpacity: 1,
                                        }}
                                      ></stop>
                                      <stop
                                        offset="100%"
                                        className="stop-color-final"
                                        style={{
                                          stopColor: "rgb(203, 211, 227)",
                                          stopOpacity: 1,
                                        }}
                                      ></stop>
                                    </linearGradient>
                                  </defs>
                                </svg>
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
                                        transition: "fill 0.2s ease-in-out 0s",
                                      }}
                                    ></path>
                                  </svg>
                                </div>
                              </div>
                            </span>
                            <span className="dot-car">•</span>
                            <span> {car.totalBook} chuyến</span>
                            <span className="dot-car">∼</span>
                            {/* <span>1.5 km</span> */}
                          </div>
                          <div className="group-label marginBottom-xs" />
                          <div className="location">
                            <p>
                              <i className="ic ic-sm-car-location" />
                              {car.addressInfo}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                ))
              ) : (
                "không tìm thấy xe"
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarSearch;

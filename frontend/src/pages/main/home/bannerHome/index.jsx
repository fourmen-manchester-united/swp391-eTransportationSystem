import React from "react";
import { Link } from "react-router-dom";

function BannerHome() {
  return (
    <div
      className="banner-home__sect wd__sect landing-page   "
      style={{
        backgroundImage: 'url("assets/images/bg-main.1e128ccf.jpg")',
        backgroundPosition: "center bottom",
      }}
    >
      <div className="container" id="home-box">
        <h1 className="slogan landing-text">
          OTO - CÙNG BAN TRÊN MỌI HÀNH TRÌNH
        </h1>
        <div className="search-by-service__container  ">
          <div className="search-by-service__wrapper">
            <div className="tabs-left">
              <Link to="#" className="active">
                <div className="service-box">
                  <i className="ict ict-selfdrive" />
                  <p>Xe tự lái</p>
                </div>
              </Link>
              <Link to="#">
                <div className="service-box">
                  <i className="ict ict-withdriver" />
                  <p>Xe có tài xế (updated soon)</p>
                </div>
              </Link>
            </div>
            <div className="search-by-service__box">
              <div className="wd-search">
                <div className="wd-search__wrapper">
                  <div className="form-search location has-placeholder ">
                    <label className="home-label">Địa điểm</label>
                    <div className="wrap-input">
                      <i className="ic ic-location-f" />
                      <div className="here-autocomplete">
                        <input
                          type="text"
                          placeholder="Nhập thanh phố, quận, địa chỉ..."
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-search has-timer">
                    <label className="home-label">Bắt đầu</label>
                    <div className="d-flex">
                      <div className="wrap-input home-datetimerange">
                        <div
                          className="react-bootstrap-daterangepicker-container"
                          style={{ display: "inline-block" }}
                        >
                          <span className="value">
                            20/09/2022{" "}
                            <i
                              className="i-chevron-down"
                              style={{ position: "static" }}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="wrap-select home-select">
                        <select>
                          <option value={0}>00:00 </option>
                          <option value={30}>00:30 </option>
                          <option value={60}>01:00 </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-search has-timer">
                    <label className="home-label">Kết thúc</label>
                    <div className="d-flex">
                      <div className="wrap-input home-datetimerange">
                        <div
                          className="react-bootstrap-daterangepicker-container"
                          style={{ display: "inline-block" }}
                        >
                          <span className="value">
                            21/09/2022{" "}
                            <i
                              className="i-chevron-down"
                              style={{ position: "static" }}
                            />
                          </span>
                        </div>
                      </div>
                      <div className="wrap-select home-select">
                        <select>
                          <option value={0}>00:00 </option>
                          <option value={30}>00:30 </option>
                          <option value={60}>01:00 </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="fn-search">
                    <a
                      className="btn btn--m btn-search-car"
                      target
                      href="/search.html"
                    >
                      <i className="ic ic-search" /> <span>TÌM XE NGAY</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerHome;

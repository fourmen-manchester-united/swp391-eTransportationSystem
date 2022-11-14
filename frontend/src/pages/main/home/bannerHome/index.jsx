import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import bannerImg from "../../../../assets/images/bg-main.1e128ccf.jpg";
import { street } from "../../../../components/Modal/vietnam-streetV2";
import { CITY_ID } from "../../../../store/constants/user.const";

function BannerHome() {
  const dispatch = useDispatch();
  const [provincesFrom, setProvincesFrom] = useState({ id: 0 });
  // const [provincesTo, setProvincesTo] = useState({ id: 0 });
  // const provinceFrom = street.find(
  //   (prov) => prov.id === parseInt(provincesFrom.id)
  // );
  const handleChangeCityId = () => {
    dispatch({
      type: CITY_ID,
      payload: provincesFrom.id,
    });
  };
  return (
    <div
      className="banner-home__sect wd__sect landing-page   "
      style={{
        backgroundImage: `url("${bannerImg}")`,
        backgroundPosition: "center bottom",
      }}
    >
      <div className="container" id="home-box">
        <h1 className="slogan landing-text">
          OTO - CÙNG BẠN TRÊN MỌI HÀNH TRÌNH
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
              {/* <Link to="#">
                <div className="service-box">
                  <i className="ict ict-withdriver" />
                  <p>Xe có tài xế (updated soon)</p>
                </div>
              </Link> */}
            </div>
            <div className="search-by-service__box">
              <div className="wd-search">
                <div className="wd-search__wrapper">
                  <div className="line-form">
                    <label className="label">Tỉnh/ Thành phố</label>
                    <div className="wrap-select">
                      <select
                        name="cityId"
                        onChange={(e) =>
                          setProvincesFrom({ id: e.target.value })
                        }
                      >
                        <option value={0}>Chọn thành phố</option>
                        {street?.length > 0 &&
                          street.map((province) => (
                            <option key={province.code} value={province.id}>
                              {province.name}
                            </option>
                          ))}
                      </select>
                    </div>
                    {/* <label className="label">Quận/ Huyện</label>
                    <div className="wrap-select">
                      <select
                        name="districtId"
                        onChange={(e) => setProvincesTo({ id: e.target.value })}
                      >
                        <option value={0}>Chọn thành phố trước</option>
                        {provinceFrom !== undefined &&
                          provinceFrom.districts.map((province) => (
                            <option value={province.id} key={province.code}>
                              {province.name}
                            </option>
                          ))}
                      </select>
                    </div> */}
                  </div>
                  <div className="space m" />
                  <div className="fn-search">
                    {provincesFrom.id !== 0 ? (
                      <Link
                        to={`/search`}
                        className="btn btn--m btn-search-car"
                        onClick={handleChangeCityId}
                      >
                        <i className="ic ic-search" /> <span>TÌM XE NGAY</span>
                      </Link>
                    ) : (
                      <button
                        className="btn btn--m btn-search-car"
                        style={{ opacity: "60%" }}
                        disabled
                      >
                        <i className="ic ic-search" />{" "}
                        <span>TÌM XE NGAY (chọn thành phố)</span>
                      </button>
                    )}
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

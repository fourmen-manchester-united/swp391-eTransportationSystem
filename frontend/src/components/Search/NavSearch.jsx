import React from "react";
import { street } from "../Modal/vietnam-streetV2";

function NavSearch({ setCityIds, setPage, setCarList }) {
  return (
    <>
      <div
        className="finding-control hide-on-lg form-default"
        id="calendar-default"
      >
        <div className="wrapper-find" id="car-finding">
          <div className="line-form location">
            <label className="label">Địa điểm</label>
            <div className="wrap-input wrap-input-transparent ">
              <select
                name="cityId"
                onChange={(e) => {
                  setCityIds(e.target.value);
                  setPage(1);
                  setCarList([]);
                }}
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
          </div>
          {/* <div className="line-form has-timer ">
            <label className="label">Bắt đầu</label>
            <div className="wrap-input wrap-input-transparent">
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
            </div>
          </div> */}
        </div>
        <div className="daterangepicker dropdown-menu ltr single openscenter">
          <div className="calendar left single" style={{ display: "block" }}>
            <div className="daterangepicker_input hidden">
              <input
                className="input-mini form-control"
                type="text"
                name="daterangepicker_start"
                defaultValue
                style={{ display: "none" }}
              />
              <i
                className="fa fa-calendar glyphicon glyphicon-calendar"
                style={{ display: "none" }}
              />
              <div className="calendar-time" style={{ display: "none" }}>
                <div />
                <i className="fa fa-clock-o glyphicon glyphicon-time" />
              </div>
            </div>
            <div className="calendar-table" />
          </div>
        </div>
        <div className="daterangepicker dropdown-menu ltr show-calendar openscenter">
          <div className="calendar left">
            <div className="daterangepicker_input hidden">
              <input
                className="input-mini form-control"
                type="text"
                name="daterangepicker_start"
                defaultValue
              />
              <i className="fa fa-calendar glyphicon glyphicon-calendar" />
              <div className="calendar-time" style={{ display: "none" }}>
                <div />
                <i className="fa fa-clock-o glyphicon glyphicon-time" />
              </div>
            </div>
            <div className="calendar-table" />
          </div>
        </div>
      </div>
      {/* <div>
        <div className="tab-mode show-on-lg">
          <div className="tab-box">
            <a href className="view-mode">
              <i className="ic ic-map-black" /> Bản đồ
            </a>
            <a href className="f-filter ">
              <i className="ic ic-filter-black" /> Bộ lọc
            </a>
          </div>
        </div>
        <div className="tab-box">
          <a href className="map-view">
            <i className="ic ic-map-black" />
            <p className="content">Bản đồ</p>
          </a>
        </div>
      </div> */}
    </>
  );
}

export default NavSearch;

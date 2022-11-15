import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  SET_LATITUDE,
  SET_LONGITUDE,
  SET_STREET,
  SET_WARD,
} from "../../store/constants/car.const";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import MapComponent from "../map";
import SearchBox from "../SearchAddress/SearchBox";
import { street } from "./vietnam-streetV2";

export function ModalAddCar() {
  const [provincesFrom, setProvincesFrom] = useState({ id: 0 });
  const [provincesTo, setProvincesTo] = useState({ id: 0 });
  const provinceFrom = street.find(
    (prov) => prov.id === parseInt(provincesFrom.id)
  );
  const provinceTo =
    provincesTo.id !== 0
      ? provinceFrom.districts.find(
          (prov) => prov.id === parseInt(provincesTo.id)
        )
      : null;
  const dispatch = useDispatch();
  const handleChangeStreet = (street) => {
    dispatch({
      type: SET_STREET,
      payload: street,
    });
  };
  const handleChangeLongitude = (longitude) => {
    dispatch({
      type: SET_LONGITUDE,
      payload: longitude,
    });
  };
  const handleChangeLatitude = (latitude) => {
    dispatch({
      type: SET_LATITUDE,
      payload: latitude,
    });
  };
  const handleChangeWard = (e) => {
    dispatch({
      type: SET_WARD,
      payload: parseInt(e.target.value),
    });
  };
  function close() {
    dispatch({
      type: CLOSE_MODAL,
    });
  }
  return (
    <>
      <div className="modal-header" style={{ padding: "0px 20px 40px" }}>
        <h4 className="modal-title">Thông tin địa chỉ xe</h4>
      </div>
      <div className="modal-body">
        <div className="edit-address__box form-default">
          <div className="line-form">
            <label className="label">
              Địa chỉ<span className="require-star">&nbsp;*</span>
            </label>
            <label className="sublabel">Tỉnh/ Thành phố</label>
            <div className="wrap-select">
              <select
                name="cityId"
                onChange={(e) => setProvincesFrom({ id: e.target.value })}
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
            <label className="sublabel">Quận/ Huyện</label>
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
            </div>
            <label className="sublabel">Phường/ Xã</label>
            <div className="wrap-select">
              <select name="wardId" onChange={handleChangeWard}>
                <option value={0}>Chọn quận huyện trước</option>
                {provinceTo !== null &&
                  provinceTo !== undefined &&
                  provinceTo.wards.map((province) => (
                    <option value={province.id} key={province.code}>
                      {province.name}
                    </option>
                  ))}
              </select>
            </div>
            <label className="sublabel">Đường</label>
            <div className="wrap-input">
              <SearchBox
                onChangeStreet={handleChangeStreet}
                onChangeLongitude={handleChangeLongitude}
                onChangeLatitude={handleChangeLatitude}
              />
            </div>
            <div className="space m" />
            <div style={{ width: "100%", height: "300px" }}>
              <MapComponent />
            </div>
          </div>
        </div>
        <div className="wrap-2-btn marginTop-m">
          <Link
            to="#"
            className="btn btn-secondary btn--m"
            style={{ width: "calc(50% - 0.5rem)", marginRight: "1rem" }}
            onClick={close}
          >
            Hủy bỏ
          </Link>
          <Link
            to="#"
            className="btn btn-primary btn--m"
            style={{ width: "calc(50% - 0.5rem)" }}
            onClick={close}
          >
            Áp dụng
          </Link>
        </div>
      </div>
    </>
  );
}

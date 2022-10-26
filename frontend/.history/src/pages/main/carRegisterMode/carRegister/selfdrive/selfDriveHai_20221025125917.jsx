import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ModalAddCar } from "../../../../../components/Modal/ModalAddCar";
import {
  SET_PRICE,
  SET_SALE_MONTH,
  SET_SALE_WEEK,
} from "../../../../../store/constants/car.const";
import { OPEN_MODAL } from "../../../../../store/constants/modal.const";

function SelfDriveHai() {
  const dispatch = useDispatch();
  const [val, setVal] = useState(10);
  const [valHai, setValHai] = useState(30);
  const inputHandler = (e) => {
    setVal(e.target.value);
    dispatch({
      type: SET_SALE_WEEK,
      payload: parseInt(e.target.value),
    });
  };
  const inputHandlerHai = (e) => {
    setValHai(e.target.value);
    dispatch({
      type: SET_SALE_MONTH,
      payload: parseInt(e.target.value),
    });
  };
  const onUpdateCar = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: <ModalAddCar />,
    });
  };
  const handleChangePrice = (e) => {
    dispatch({
      type: SET_PRICE,
      payload: parseInt(e.target.value),
    });
  };
  return (
    <div>
      <div className="group form-default">
        <h6>Đơn giá thuê mặc định</h6>
        <p className="fl">
          <span className="note">
            Đơn giá áp dụng cho tất cả các ngày. Bạn có thuể tuỳ chỉnh giá khác
            cho các ngày đặc biệt (cuối tuần, lễ, tết...) trong mục quản lý xe
            sau khi đăng kí.
          </span>
        </p>
        <div className="space m" />
        <div className="col-left">
          <div className="form-default">
            <div className="line-form">
              <p className="pl">
                <span className="note">Giá đề xuất: 720K</span>
              </p>
              <div className="wrap-input-label d-flex">
                <div className="wrap-input">
                  <input
                    type="text"
                    defaultValue={720}
                    onChange={handleChangePrice}
                  />
                </div>
                <span className="phay"> K (VND)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space m clear" />
        <div className="form-default">
          <div className="group-inline d-flex">
            <h6>Giảm giá</h6>
          </div>
          <div className="col-left">
            <div className="line-form end">
              <label className="label">
                Giảm giá thuê tuần (% trên đơn giá)
              </label>
              <input
                type="range"
                min={0}
                max={100}
                val={val}
                onInput={inputHandler}
                style={{
                  padding: 0,
                }}
              />
              <span style={{ float: "right", fontSize: 14 }}>{val}%</span>
              <div className="space m" />
              <p className="pl">
                <span className="note">Giảm đề xuất: 10%</span>
              </p>
            </div>
          </div>
          <div className="col-right">
            <div className="line-form end">
              <label className="label">
                Giảm giá thuê tháng (% trên đơn giá)
              </label>
              <input
                type="range"
                min={0}
                max={100}
                val={valHai}
                onInput={inputHandlerHai}
                style={{
                  padding: 0,
                }}
              />
              <span style={{ float: "right", fontSize: 14 }}>{valHai}%</span>
              <div className="space m" />
              <p className="pl">
                <span className="note">Giảm đề xuất: 30%</span>
              </p>
            </div>
          </div>
        </div>
        <div className="form-default">
          <h6>Địa chỉ xe</h6>
          <div className="line-form">
            <div className="wrap-input has-ico-search">
              <Link
                to="#"
                className="func-edit"
                title="Chỉnh sửa"
                onClick={() => onUpdateCar()}
              >
                <i className="ic ic-map" />
              </Link>
              <input
                type="text"
                disabled
                placeholder="Địa chỉ mặc định để giao nhận xe."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelfDriveHai;

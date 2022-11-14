import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  SET_UPDATE_PRICE,
  SET_UPDATE_SALE_MONTH,
  SET_UPDATE_SALE_WEEK,
} from "../../../../store/constants/car.const";

function RentalPrice({ carDetail }) {
  const dispatch = useDispatch();
  const [val, setVal] = useState(carDetail.saleWeek);
  const [valHai, setValHai] = useState(carDetail.saleMonth);
  const inputHandler = (e) => {
    setVal(e.target.value);
    dispatch({
      type: SET_UPDATE_SALE_WEEK,
      payload: parseInt(e.target.value),
    });
  };
  const inputHandlerHai = (e) => {
    setValHai(e.target.value);
    dispatch({
      type: SET_UPDATE_SALE_MONTH,
      payload: parseInt(e.target.value),
    });
  };

  const handleChangePrice = (e) => {
    dispatch({
      type: SET_UPDATE_PRICE,
      payload: parseInt(e.target.value),
    });
  };
  return (
    <>
      <div className="col-1">
        <h3>Đơn giá thuê mặc định</h3>
        <div className="form-default">
          <div className="line-form">
            <span className="note">
              Đơn giá thuê mặc định được áp dụng nếu ngày đó không có tuỳ chỉnh
              khác về giá.
            </span>
            <div className="wrap-input">
              <input
                type="text"
                defaultValue={carDetail.price}
                onChange={handleChangePrice}
              />
            </div>
            <span className="note">Giá đề xuất: 2690K</span>
          </div>
        </div>
      </div>
      <div className="space m clear"></div>
      <h3>Giảm giá</h3>
      <div className="form-default">
        <div className="col-1 clear">
          <div className="line-form">
            <label className="label">Giảm giá thuê tuần (% trên đơn giá)</label>
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
        <div className="col-2">
          <div className="line-form">
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
    </>
  );
}

export default RentalPrice;

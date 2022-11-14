import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import DeleteCar from "../../../../components/Modal/DeleteCar";
import { OPEN_MODAL } from "../../../../store/constants/modal.const";

function Card({ car, setHandleGrant }) {
  const dispatch = useDispatch();
  const onDeleteCar = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <DeleteCar id={id} setHandleGrant={setHandleGrant} />,
    });
  };
  return (
    <div className="trip-box">
      <Link to="#" className="func-remove" onClick={() => onDeleteCar(car.id)}>
        <i className="ic ic-remove" />
      </Link>
      <div className="box-wrap">
        <div className="item-car status-trips">
          {car.status === "ACTIVE" ? (
            <p className="status">
              <span className="status green-dot" />
              Thành Công
            </p>
          ) : (
            <>
              {car.status === "PENDING_APPROVAL" ? (
                <p className="status">
                  <span className="status orange-dot" />
                  Đang Chờ Duyệt
                </p>
              ) : (
                <p className="status">
                  <span className="status red-dot" />
                  Không Thành Công
                </p>
              )}
            </>
          )}
          <div className="car-img">
            <div className="fix-img">
              <Link to={`/car-detail/${car.id}`}>
                <img src={car.carImage} alt={car.name} />
              </Link>
            </div>
          </div>
        </div>
        <div className="desc-car">
          <h2>{car.name}</h2>
          {/* <div className="wrap-line">
            <p>Chưa có chuyến</p>
          </div> */}
          <p className="cost">
            Giá tự lái: <span className="price">{car.price}K</span>
          </p>
          <p className="marginTop-xs">
            <i className="ic ic-sm-car-location" />
            {car.addressInfo}
          </p>
          <hr className="line-m" />
          <div style={{ display: "flex" }}>
            <Link
              to={`/car-detail/${car.id}`}
              className="btn btn-secondary btn--m"
            >
              Xem chi tiết
            </Link>
            <Link
              to={`/carSeting/${car.id}`}
              className="btn btn-primary btn--m"
            >
              Quản lý xe
            </Link>
          </div>
        </div>
      </div>
      <div className="trip-footer">
        <a
          className="btn btn-secondary btn--m"
          href="/car/bmw-520i-2017/KLAQ2V"
        >
          Xem chi tiết
        </a>
        <a
          className="btn btn-primary btn--m"
          href="/carsetting/KLAQ2V#infosetting"
        >
          Quản lý xe
        </a>
      </div>
    </div>
  );
}

export default Card;

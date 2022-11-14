import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteLike } from "../../../../store/actions/car.action";

function CardCarLike({ car, setHandleGrant }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const onDeleteLike = (id) => {
    setIsLoading(true);
    dispatch(deleteLike(id, setHandleGrant));
    setIsLoading(false);
  };
  return (
    <div className="trip-box">
      <div className="box-wrap">
        <div className="item-car status-trips">
          {/* <p className="status">
            <span className="status green-dot" />
            {car.status}
          </p> */}
          <div className="car-img">
            <div className="fix-img">
              <Link to={`/car-detail/${car.id}`}>
                <img src={car.carImage} alt={car.carName} />
              </Link>
            </div>
          </div>
        </div>
        <div className="desc-car">
          <h2>{car.name}</h2>
          <p className="cost">
            Giá thuê: <span className="price">{car.price}K</span>
          </p>
          {/* <div className="line-form notice-form note">
            <p className="d-flex-between">
              Ngày nhận xe
              <span>{car.startDate}</span>
            </p>
            <p className="d-flex-between">
              Ngày trả xe
              <span>{car.endDate}</span>
            </p>
          </div> */}
          <p className="marginTop-xs">
            <i className="ic ic-sm-car-location" />
            {car.addressInfo}
          </p>
          <hr className="line-m" />
          {/* <div className="wrap-line">
            <p>xe đã được thuê: {car.addressInfo}</p>
          </div> */}
          <div style={{ display: "flex" }}>
            <Link
              to={`/car-detail/${car.id}`}
              className="btn btn-secondary btn--m"
            >
              Xem chi tiết
            </Link>
            <Link
              to="#"
              className="btn btn-red btn--m"
              onClick={() => onDeleteLike(car.id)}
              disabled={isLoading}
            >
              {isLoading ? "Deleting..." : "Hủy yêu thích"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarLike;

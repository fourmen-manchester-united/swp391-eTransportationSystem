import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CancelCar from "../../../../components/Modal/CancelCar";
import ExtendCar from "../../../../components/Modal/ExtendCar";
import ReviewModal from "../../../../components/Modal/ReviewModal";
import { OPEN_MODAL } from "../../../../store/constants/modal.const";

function CardCarBook({ car, setHandleGrant }) {
  const dispatch = useDispatch();
  const onCancelCar = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <CancelCar id={id} setHandleGrant={setHandleGrant} />,
    });
  };
  const onExtend = (id, carId, startDate) => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <ExtendCar
          id={id}
          carId={carId}
          startDates={startDate}
          setHandleGrant={setHandleGrant}
        />
      ),
    });
  };
  const onReview = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <ReviewModal id={id} setHandleGrant={setHandleGrant} />,
    });
  };
  return (
    <div className="trip-box">
      <div className="box-wrap">
        <div className="item-car status-trips">
          {car.status === "SUCCESS" ? (
            <p className="status">
              <span className="status green-dot" />
              Thuê Thành Công
            </p>
          ) : (
            <>
              {car.status === "EXPIRED" ? (
                <p className="status">
                  <span className="status orange-dot" />
                  Hết Hạn
                </p>
              ) : (
                <p className="status">
                  <span className="status red-dot" />
                  Huỷ Chuyến
                </p>
              )}
            </>
          )}
          <div className="car-img">
            <div className="fix-img">
              <Link to={`/book-detail/${car.book_Id}`}>
                <img src={car.carImage} alt={car.carName} />
              </Link>
            </div>
          </div>
        </div>
        <div className="desc-car">
          <h2>{car.carName}</h2>
          <p className="cost">
            Giá đã thuê: <span className="price">{car.totalPrice}K</span>
          </p>
          <div className="line-form notice-form note">
            <p className="d-flex-between">
              Ngày nhận xe
              <span>{car.startDate}</span>
            </p>
            <p className="d-flex-between">
              Ngày trả xe
              <span>{car.endDate}</span>
            </p>
          </div>

          <button
            className="btn btn-default btn--m"
            onClick={() => onExtend(car.book_Id, car.car_Id, car.startDate)}
          >
            Gia Hạn
          </button>
          <hr className="line-m" />
          <div className="wrap-line">
            <p>xe đã được thuê: {car.historyTime}</p>
          </div>
          <div style={{ display: "flex" }}>
            {car.review === null ? (
              <Link
                to="#"
                className="btn btn-secondary btn--m"
                onClick={() => onReview(car.book_Id)}
              >
                Đánh Giá
              </Link>
            ) : (
              <Link
                to="#"
                className="btn btn-secondary btn--m"
                disabled
                style={{ opacity: "60%" }}
              >
                Đã Đánh Giá
              </Link>
            )}
            <Link
              to="#"
              className="btn btn-red btn--m"
              onClick={() => onCancelCar(car.book_Id)}
            >
              Hủy Chuyến
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCarBook;

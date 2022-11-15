import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { OPEN_MODAL } from "../../store/constants/modal.const";
import CarModal from "../Modal/CarModal";
import DeleteCar from "../Modal/DeleteCar";

function CarItem({ listCar, setHandleGrant }) {
  const dispatch = useDispatch();
  const onCar = (id, status) => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <CarModal id={id} status={status} setHandleGrant={setHandleGrant} />
      ),
    });
  };
  const onDeleteCar = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <DeleteCar id={id} setHandleGrant={setHandleGrant} />,
    });
  };
  return (
    <div className="trip-box">
      <Link
        to="#"
        className="func-remove"
        onClick={() => onDeleteCar(listCar.id)}
      >
        <i className="ic ic-remove" />
      </Link>
      <div className="box-wrap">
        <div className="item-car status-trips">
          {listCar.status === "ACTIVE" ? (
            <p className="status">
              <span className="status green-dot" />
              {listCar.status}
            </p>
          ) : (
            <>
              {listCar.status === "PENDING_APPROVAL" ? (
                <p className="status">
                  <span className="status orange-dot" />
                  PENDING
                </p>
              ) : (
                <p className="status">
                  <span className="status red-dot" />
                  {listCar.status}
                </p>
              )}
            </>
          )}
          <div className="car-img">
            <div className="fix-img">
              <Link to={`/car-detail/${listCar.id}`}>
                <img src={listCar.carImage} alt={listCar.name} />
              </Link>
            </div>
          </div>
        </div>
        <div className="desc-car">
          <h2>{listCar.name}</h2>
          <p className="cost">
            Giá tự lái: <span className="price">{listCar.price}K</span>
          </p>
          <p className="marginTop-xs">
            <i className="ic ic-sm-car-location" />
            {listCar.addressInfo}
          </p>
          <hr className="line-m" />
          <div style={{ display: "flex" }}>
            <Link
              to={`/car-detail/${listCar.id}`}
              className="btn btn-secondary btn--m"
            >
              Chi tiết
            </Link>
            <Link
              to="#"
              className="btn btn-primary btn--m"
              onClick={() => onCar(listCar.id, listCar.status)}
            >
              Cấp Quyền
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarItem;

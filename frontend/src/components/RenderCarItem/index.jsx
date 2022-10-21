import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getListCar } from "../../store/actions/car.action";
import CarItem from "../CarItem";
import Load from "../Load";

function RenderCarItem() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(
      getListCar(page, userList, setUserList, setTotalPages, setLoading)
    );
    // eslint-disable-next-line
  }, [page]);
  return (
    <div className="car-area__sect">
      <div className="m-container">
        <h3 className="title-car textTransform-uppercase">
          Xe nổi bật - xe có tai xế
        </h3>
        <div className="swiper-container swiper-perfect-box swiper-container-horizontal">
          <div
            className="swiper-wrapper box-car__wrap"
            style={{
              display: "grid",
              gap: "24px",
              gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            }}
          >
            {userList.map((listCar, index) => (
              <CarItem listCar={listCar} key={index} />
            ))}
          </div>
        </div>
        <div
          className="has-2btn"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {loading ? (
            <button
              className="btn btn-primary btn--m"
              disabled
              style={{
                opacity: ".4",
                display: "flex",
                justifyContent: "center",
              }}
            >
              Xem thêm xe
              <Load isSmall={true} />
            </button>
          ) : (
            <>
              {totalPages !== page && (
                <button
                  onClick={() => setPage(page + 1, setLoading(true))}
                  className="btn btn-primary btn--m"
                >
                  Xem thêm xe
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default RenderCarItem;

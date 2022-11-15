import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Pagination from "../../pages/admin/userManagement/pagination";
import { getListCar } from "../../store/actions/car.action";
import CarItem from "../CarItem";
import Load from "../Load";
import { NotificationContainer } from "react-notifications";

function RenderCarItem() {
  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [handleGrant, setHandleGrant] = useState(null);
  useEffect(() => {
    dispatch(getListCar(page, setUserList, setTotalPages, setLoading));
    // eslint-disable-next-line
  }, [handleGrant, page]);
  return (
    <div className="car-area__sect">
      <div className="m-container">
        <h3 className="title-car textTransform-uppercase">
          Xe nổi bật - xe có tai xế
        </h3>
        <div
          className="module-map module-car min-height-no-footer"
          style={{ width: "100%", textAlign: "center" }}
        >
          {loading ? (
            <Load />
          ) : (
            <div
              className="listing-car"
              style={{
                display: "grid",
                gap: "24px",
                gridTemplateColumns: "repeat(auto-fit,minmax(400px,2fr))",
              }}
            >
              {userList.map((listCar, index) => (
                <CarItem
                  listCar={listCar}
                  setHandleGrant={setHandleGrant}
                  key={index}
                />
              ))}
            </div>
          )}
          <div
            className="has-2btn"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination value={page} range={totalPages} onChange={setPage} />
          </div>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default RenderCarItem;

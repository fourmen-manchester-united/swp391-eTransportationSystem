import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../../../components/Load";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { getListCarByUser } from "../../../../store/actions/user.action";
import Card from "./card";
import { NotificationContainer } from "react-notifications";

function MyCar() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const [handleGrant, setHandleGrant] = useState(null);
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getListCarByUser(isLogin.id));
    },
    // eslint-disable-next-line
    [isLogin.id, handleGrant]
  );
  const { carByUser } = useSelector((state) => state.user);
  const [statusCar, setStatusCar] = useState("");
  const handleChangeStatus = (event) => {
    setStatusCar(event.target.value);
  };

  return (
    <div className="body has-filter">
      <div>
        <div style={{ paddingBottom: 0 }} />
        <div
          className="filter-trips"
          style={{ width: 325, transform: "translateZ(0px)" }}
        >
          <div className="content-filter">
            <div className="rent-car">
              <div className="line-form">
                <label className="label">Trạng Thái </label>
                <div className="wrap-select">
                  <select onChange={handleChangeStatus}>
                    <option value="">Tất cả</option>
                    <option value="ACTIVE">Đang hoạt động</option>
                    <option value="PENDING_APPROVAL">Đang chờ duyệt</option>
                    <option value="DENIED">Đã bị từ chối </option>
                    <option value="PAUSE">Đang tạm ngừng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="module-map module-car min-height-no-footer"
        style={{ textAlign: "center" }}
      >
        {carByUser ? (
          <div className="listing-car">
            {carByUser.length > 0 ? (
              <>
                {statusCar === ""
                  ? carByUser.map((car, index) => (
                      <Card
                        car={car}
                        setHandleGrant={setHandleGrant}
                        key={index}
                      />
                    ))
                  : carByUser
                      .filter((car) => car.status === statusCar)
                      .map((car, index) => <Card car={car} key={index} />)}
              </>
            ) : (
              <div
                className="min-height-no-footer"
                style={{ textAlign: "center", padding: "30vh 10vh" }}
              >
                <p className="no-result">Không tìm thấy xe nào.</p>
              </div>
            )}
          </div>
        ) : (
          <Load />
        )}
      </div>
      <NotificationContainer />
    </div>
  );
}

export default MyCar;

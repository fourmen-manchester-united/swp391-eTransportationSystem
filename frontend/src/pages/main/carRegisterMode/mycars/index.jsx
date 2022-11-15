import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { getListCarByUser } from "../../../../store/actions/user.action";

function MyCar() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getListCarByUser(isLogin.id));
    },
    // eslint-disable-next-line
    [isLogin.id]
  );
  const { carByUser } = useSelector((state) => state.user);
  console.log("🚀 ~ByUser", carByUser);

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
                  <select>
                    <option value={0}>Tất cả</option>
                    <option value={2}>Đang hoạt động</option>
                    <option value={1}>Đang chờ duyệt</option>
                    <option value={3}>Đã bị từ chối </option>
                    <option value={5}>Đang tạm ngừng</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="module-map module-car min-height-no-footer">
        {carByUser ? (
          <div className="listing-car">
            {carByUser &&
              carByUser.map((car, index) => (
                <div className="trip-box" key={index}>
                  <Link to="#" className="func-remove">
                    <i className="ic ic-remove" />
                  </Link>
                  <div className="box-wrap">
                    <div className="item-car status-trips">
                      <p className="status">
                        <span className="status orange-dot" />
                        {car.status}
                      </p>
                      <div className="car-img">
                        <div className="fix-img">
                          <a href="/car/bmw-520i-2017/KLAQ2V">
                            <img src={car.carImage} alt={car.name} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="desc-car">
                      <h2>{car.name}</h2>
                      <div className="wrap-line">
                        <p>Chưa có chuyến</p>
                      </div>
                      <p className="cost">
                        Giá tự lái: <span className="price">{car.price}K</span>
                      </p>
                      <p className="marginTop-xs">
                        <i className="ic ic-sm-car-location" />
                        {car.addressInfo}
                      </p>
                      <hr className="line-m" />
                      <Link
                        to={`/car-detail/${car.id}`}
                        className="btn btn-secondary btn--m"
                      >
                        Xem chi tiết
                      </Link>
                      <Link to="#" className="btn btn-primary btn--m">
                        Quản lý xe
                      </Link>
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
              ))}
          </div>
        ) : (
          <div
            className="min-height-no-footer"
            style={{ textAlign: "center", padding: "30vh 10vh" }}
          >
            <p className="no-result">Không tìm thấy xe nào.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyCar;

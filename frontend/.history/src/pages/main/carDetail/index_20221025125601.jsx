import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Load from "../../../components/Load";

function CarDetail() {
  const { carId } = useParams();
  const [carDetail, setCarDetail] = useState(null);

  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/car/details/${carId}`,
      })
        .then((res) => {
          setCarDetail(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [carId]);
  return (
    <section className="body">
      {carDetail ? (
        <div className="cover-car">
          <div className="swiper-container swiper-car swiper-container-horizontal">
            <div className="swiper-wrapper" style={{ display: "flex" }}>
              {carDetail.carImages.map((carImages, index) => (
                <Link
                  to="#"
                  data-swiper-slide-index={1}
                  style={{ width: 500 }}
                  key={index}
                >
                  <div className="img-cover fit-img">
                    <img
                      src={carImages.image}
                      alt="Cho thuê xe tự lái TOYOTA FORTUNER V 2020"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="module-detail dt__wrapper">
            <div className="detail-container">
              <div className="content-detail">
                <div className="info-car">
                  <div className="group-name">
                    <h1 className="title-car">{carDetail.name}</h1>
                    <p className="price">
                      <span className="special">1200K</span> <span> /ngày</span>
                    </p>
                  </div>
                  <div className="group-line">
                    <div className="bar-line"> </div>
                    <p>
                      <span className="value">23 chuyến</span>
                    </p>
                  </div>
                  <div class="group-label">
                    <span>{carDetail.transmission}</span>
                    <span>Giao xe tận nơi</span>
                  </div>
                </div>
              </div>
              <div className="sidebar-detail">
                <div className="rent-box rent-car" id="booking-sidebar">
                  <div className="price">
                    <h3>
                      {carDetail.price} <span> / ngày</span>
                    </h3>
                  </div>
                  <div className="line-form has-timer">
                    <label className="label">Ngày nhận xe</label>
                    <div className="wrap-input has-dropdown date">
                      <div
                        className="react-bootstrap-daterangepicker-container"
                        style={{ display: "inline-block" }}
                      >
                        <span className="value">21/09/2022</span>
                      </div>
                    </div>
                    <div className="wrap-input has-dropdown time wrap-select">
                      <select>
                        <option value={0}>00:00 </option>
                        <option value={30}>00:30 </option>
                        <option value={60}>01:00 </option>
                      </select>
                    </div>
                  </div>
                  <div className="line-form has-timer">
                    <label className="label">Ngày trả xe</label>
                    <div className="wrap-input has-dropdown date">
                      <div
                        className="react-bootstrap-daterangepicker-container"
                        style={{ display: "inline-block" }}
                      >
                        <span className="value">22/09/2022</span>
                      </div>
                    </div>
                    <div className="wrap-input has-dropdown time wrap-select">
                      <select>
                        <option value={0}>00:00 </option>
                        <option value={30}>00:30 </option>
                        <option value={60}>01:00 </option>
                      </select>
                    </div>
                  </div>
                  <div className="line-form notice-form note">
                    <p className="d-flex-between">
                      Thời gian nhận xe <span>06:00-23:00 </span>
                    </p>
                    <p className="d-flex-between">
                      Thời gian trả xe <span>06:00-23:00</span>
                    </p>
                  </div>
                  <div className="line-form local">
                    <div className="note">
                      <Link to="#" className="location-picker">
                        <svg
                          className="icsvg"
                          viewBox="0 0 24 24"
                          style={{ fill: "none" }}
                        >
                          <path
                            d="m12 22.5c5.799 0 10.5-4.701 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5-5.799 0-10.5 4.701-10.5 10.5 0 5.799 4.701 10.5 10.5 10.5zm0 1.5c6.6274 0 12-5.3726 12-12 0-6.6274-5.3726-12-12-12-6.6274 0-12 5.3726-12 12 0 6.6274 5.3726 12 12 12z"
                            clipRule="evenodd"
                            fill="#141414"
                            fillRule="evenodd"
                          />
                          <path
                            d="m7.5 10.494c0-2.4778 2.0187-4.4937 4.5-4.4937 2.4813 0 4.5 2.0159 4.5 4.4937 0 1.2789-0.7204 2.918-2.1412 4.8719-1.0399 1.4301-2.0635 2.484-2.1066 2.5281-0.0662 0.068-0.1572 0.1063-0.2522 0.1063s-0.186-0.0383-0.2522-0.1063c-0.0431-0.0442-1.0667-1.098-2.1066-2.5281-1.4208-1.9539-2.1412-3.593-2.1412-4.8719zm4.5095 1.5064c0.9955 0 1.8025-0.8059 1.8025-1.8 0-0.99411-0.807-1.8-1.8025-1.8s-1.8025 0.80589-1.8025 1.8c0 0.9941 0.807 1.8 1.8025 1.8z"
                            clipRule="evenodd"
                            fill="#141414"
                            fillRule="evenodd"
                          />
                        </svg>
                        <span>{carDetail.addressInfo}</span>
                      </Link>
                    </div>
                  </div>
                  <div className="car-bill">
                    <h4 className="text-center">Chi tiết giá</h4>
                    <div className="bill-wrap">
                      <div className="group">
                        <p>Đơn giá thuê </p>
                        <div className="tooltip">
                          <i className="ic ic-question-mark" />
                          <div className="tooltip-text">
                            Giá thuê xe không bao gồm tiền xăng. Khi kết thúc
                            chuyến đi, bạn sẽ đổ xăng về lại mức ban đầu như khi
                            nhận xe.
                          </div>
                        </div>
                        <p />
                        <span>
                          <span>1 200 000 / ngày</span>
                        </span>
                      </div>
                      <div className="group has-line">
                        <p>
                          <strong>Tổng cộng</strong>
                        </p>
                        <span>
                          <strong>
                            <span>1 308 000đ</span>
                          </strong>
                        </span>
                      </div>
                    </div>
                    <div className="wrap-btn">
                      <Link to="#" className="btn btn-primary btn--m">
                        ĐẶT XE
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-detail">
                <div className="info-car--desc">
                  <div className="group">
                    <span className="lstitle-new">ĐẶC ĐIỂM</span>
                    <div className="ctn-desc-new">
                      <ul className="features">
                        <li>
                          <i className="ic ic-chair" /> Số ghế: 7
                        </li>
                        <li>
                          <i className="ic ic-trans" /> Truyền động:
                          {carDetail.transmission}
                        </li>
                        <li>
                          <i className="ic ic-diesel" /> Nhiên liệu:
                          {carDetail.fuel}
                        </li>
                        <li>
                          <i className="ic ic-fuel-consumption" /> Mức tiêu thụ
                          nhiêu liệu: 7 lít/100km
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="group">
                    <span className="lstitle-new">MÔ TẢ</span>
                    <div className="ctn-desc-new">
                      <pre>{carDetail.name}</pre>
                    </div>
                  </div>
                  <div className="group">
                    <span className="lstitle-new">TÍNH NĂNG</span>
                    <div className="ctn-desc-new">
                      <ul className="accessories">
                        {carDetail.features.map((feature, index) => (
                          <li key={index}>
                            <img
                              className="img-ico car-img-sw"
                              src={feature.icon}
                              alt="Thuê xe"
                            />
                            {feature.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="group">
                    <span className="lstitle-new">
                      GIẤY TỜ THUÊ XE (BẢN GỐC)
                    </span>
                    <div className="ctn-desc-new">
                      <ul className="required">
                        <li>
                          <img
                            className="img-ico car-img-sw"
                            src="images/cmnd.png"
                            alt="Mioto - Thuê xe tự lái"
                          />{" "}
                          CMND và GPLX (đối chiếu)
                        </li>
                        <li>
                          <img
                            className="img-ico car-img-sw"
                            src="images/passport.png"
                            alt="Mioto - Thuê xe tự lái"
                          />{" "}
                          Passport hoặc Hộ khẩu hoặc KT3 (giữ lại)
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="group">
                    <span className="lstitle-new">TÀI SẢN THẾ CHẤP</span>
                    <div className="ctn-desc-new">
                      <pre>
                        15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe)
                        {"\n"}hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu
                      </pre>
                    </div>
                  </div>
                  <div className="group">
                    <span className="lstitle-new">ĐIỀU KHOẢN</span>
                    <div className="ctn-desc-new clause">
                      <pre>
                        1. Giấy tờ thuê xe (bản gốc){"\n"}◦ Chấp nhận
                        Passport/Hộ khẩu Thành phố/KT3 Thành phố/Hộ khẩu tỉnh
                        (giữ lại khi nhận xe).{"\n"}◦ CMND và GPLX (đối chiếu và
                        trả lại cho khách).{"\n"}
                      </pre>
                    </div>
                  </div>
                  <div className="wr-wrap-btn">
                    <div className="wrap-btn">
                      <Link to="#" className="btn btn-default btn--m">
                        Báo xấu (updated soon)
                      </Link>
                    </div>
                    <div className="wrap-btn">
                      <Link to="#" className="btn btn-primary btn--m">
                        Thêm vào danh sách yêu thích
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Load />
      )}
    </section>
  );
}

export default CarDetail;

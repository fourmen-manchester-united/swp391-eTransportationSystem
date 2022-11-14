import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  FaInfoCircle,
  FaCameraRetro,
  // FaClipboardList,
  FaMoneyBillWave,
} from "react-icons/fa";
import Load from "../../../components/Load";
import Tabs from "./tab/tabs";
// import PapersSetting from "./paperssetting";
import PhotosSetting from "./photossetting";
// import TripsSetting from "./tripssetting";
import InfoSetting from "./infosetting";
import RentalPrice from "./rentalPrice";
import { useDispatch, useSelector } from "react-redux";
import { updateCarAct } from "../../../store/actions/car.action";
import { NotificationContainer } from "react-notifications";

function CarSetting() {
  const { carId } = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const { loading } = useSelector((state) => state.common);
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
  }, [carId, loading]);
  const dispatch = useDispatch();
  const { updateCar } = useSelector((state) => state.car);
  const onUpdateCar = () => {
    dispatch(updateCarAct(updateCar, carDetail));
  };
  return (
    <section className="body">
      {carDetail ? (
        <>
          <div
            className="module-settings"
            style={{
              paddingTop: "60px",
            }}
          >
            <div className="info-car status-trips">
              <div className="info-img">
                <div className="fix-img">
                  <img
                    src={carDetail.carImages[0].image}
                    alt="Cho thuê xe tự lái AUDI A6 2017"
                  />
                </div>
              </div>
              <div className="info-desc hide-on-small">
                <div className="group-name">
                  <span className="lstitle">DÒNG XE</span>
                  <h1 className="title-car">{carDetail.name}</h1>
                  <span className="text-disabled">Chưa có chuyến</span>
                  <div className="space " />
                  {carDetail.status === "ACTIVE" ? (
                    <p className="status-info">
                      <span className="status green-dot" />
                      Thành Công
                    </p>
                  ) : (
                    <>
                      {carDetail.status === "PENDING_APPROVAL" ? (
                        <p className="status-info">
                          <span className="status orange-dot" />
                          Đang Chờ Duyệt
                        </p>
                      ) : (
                        <p className="status-info">
                          <span className="status red-dot" />
                          Không Thành Công
                        </p>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="clear" />
          </div>
          <div className="body-container settings min-height-no-footer">
            <Tabs>
              <div label="Thông tin" Icon={FaInfoCircle}>
                <InfoSetting carDetail={carDetail} />
              </div>
              <div label="Hình ảnh" Icon={FaCameraRetro}>
                <PhotosSetting carDetail={carDetail} />
              </div>
              {/* <div label="Giấy tờ xe" Icon={FaAddressCard}>
                <PapersSetting />
              </div> */}
              {/* <div label="Quản lý chuyến" Icon={FaClipboardList}>
                <TripsSetting />
              </div> */}
              <div label="Giá cho thuê" Icon={FaMoneyBillWave}>
                <RentalPrice carDetail={carDetail} />
              </div>
            </Tabs>
            <section className="content" style={{ minHeight: "0px" }}>
              <div className="space m"></div>
              <div className="line"></div>
              {!loading ? (
                <button
                  className="btn btn-primary btn--m"
                  onClick={onUpdateCar}
                  disabled={loading}
                >
                  Lưu thay đổi
                </button>
              ) : (
                <button
                  className="btn btn-primary btn--m"
                  disabled
                  style={{
                    opacity: ".4",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Lưu thay đổi <Load isSmall={true} />
                </button>
              )}
            </section>
          </div>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <Load />
        </div>
      )}
      <NotificationContainer />
    </section>
  );
}

export default CarSetting;

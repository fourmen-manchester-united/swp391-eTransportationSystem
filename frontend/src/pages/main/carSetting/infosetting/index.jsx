import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeature } from "../../../../store/actions/car.action";
import {
  SET_UPDATE_DESCRIPTION,
  SET_UPDATE_FEATURES,
} from "../../../../store/constants/car.const";
import MapComponent from "./../../../../components/map/index";

function InfoSetting({ carDetail }) {
  const dispatch = useDispatch();
  const [features, setFeatures] = useState(carDetail.features);
  features.map((features) => delete features["name"]);
  features.map((features) => delete features["icon"]);
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getFeature());
    },
    // eslint-disable-next-line
    []
  );
  const { feature } = useSelector((state) => state.car);
  const handleChangeFeature = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures([...features, { id: parseInt(value) }]);
      dispatch({
        type: SET_UPDATE_FEATURES,
        payload: [...features, { id: parseInt(value) }],
      });
    } else {
      setFeatures(features.filter((e) => e.id !== parseInt(value)));
      dispatch({
        type: SET_UPDATE_FEATURES,
        payload: features.filter((e) => e.id !== parseInt(value)),
      });
    }
  };
  const handleChangeDescription = (e) => {
    dispatch({
      type: SET_UPDATE_DESCRIPTION,
      payload: e.target.value,
    });
  };
  return (
    <>
      <div className="col-1">
        <h3>Biển số</h3>
        <div className="form-default">
          <div className="line-form">
            <div className="wrap-input">
              <input
                type="text"
                disabled
                defaultValue={carDetail.licensePlates}
              />
            </div>
            <span className="note">Thông tin không thể thay đổi.</span>
          </div>
        </div>
      </div>
      <div className="space m clear"></div>
      <div className="form-default">
        <div className="position-relative pos-1">
          <div className="line-form">
            <h3 class="title">Địa chỉ xe</h3>
            <div className="wrap-input has-ico-search">
              <i className="ic ic-map" />
              <input type="text" disabled placeholder={carDetail.addressInfo} />
            </div>
          </div>
          <div style={{ width: "100%", height: "500px" }}>
            <MapComponent />
          </div>
        </div>
      </div>
      <div className="space m clear"></div>
      <h3>Thông tin cơ bản</h3>
      <div className="form-default">
        <div className="col-1 clear">
          <div className="line-form">
            <label className="label">Số ghế</label>
            <div className="wrap-input">
              <input type="text" disabled defaultValue={carDetail.seats} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="line-form">
            <label className="label">Truyền động</label>
            <div className="wrap-input">
              <input
                type="text"
                disabled
                defaultValue={carDetail.transmission}
              />
            </div>
          </div>
        </div>
        <div className="col-1 clear">
          <div className="line-form">
            <label className="label">Loại nhiên liệu</label>
            <div className="wrap-input">
              <input type="text" disabled defaultValue={carDetail.fuel} />
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="line-form">
            <label className="label">Mức tiêu thụ nhiên liệu (lít/100km)</label>
            <div className="wrap-input">
              <input type="text" disabled defaultValue={10} />
            </div>
          </div>
        </div>
      </div>
      <div className="space m clear"></div>
      <h3>Mô tả</h3>
      <div className="form-default">
        <div className="line-form end">
          <textarea
            className="textarea"
            wrap="hard"
            placeholder="Huyndai Elantra số tự động đăng kí tháng 06/2018. Xe gia đình mới đẹp, nội thất nguyên bản, sạch sẽ, bảo dưỡng thường xuyên, rửa xe miễn phí cho khách. Xe rộng rãi, an toàn, tiện nghi, phù hợp cho gia đình du lịch. Xe trang bị hệ thống cảm biến lùi, gạt mưa tự động, đèn pha tự động, camera hành trình, hệ thống giải trí AV cùng nhiều tiện nghi khác..."
            defaultValue={carDetail.description}
            onChange={handleChangeDescription}
          />
        </div>
      </div>
      <div className="space m clear"></div>
      <h3>Tính năng</h3>
      <div className="car-feature__sect">
        <div className="list-feature">
          {feature &&
            feature.map((feature, index) => (
              <div className="squaredThree have-label" key={index}>
                <input
                  id={feature.id}
                  type="checkbox"
                  name={feature.name}
                  value={feature.id}
                  onChange={handleChangeFeature}
                  checked={
                    features.map((f) => f.id).indexOf(feature.id) > 0
                      ? true
                      : false
                  }
                />
                <label className="description" htmlFor={feature.id}>
                  <div className="thumbnail">
                    <img
                      className="img-fluid"
                      src={feature.icon}
                      alt={feature.name}
                    />
                    <span style={{ fontSize: "0.875rem" }}>{feature.name}</span>
                  </div>
                </label>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default InfoSetting;

import React, { useState } from "react";
import Tabs from "./tab/tabs";
import SelfDriveBa from "./selfdrive/selfDriveBa";
import SelfDriveMot from "./selfdrive/selfDriveMot";
import SelfDriveHai from "./selfdrive/selfDriveHai";
import { Link, useHistory } from "react-router-dom";
import { saveCar } from "../../../../store/actions/car.action";
import { useDispatch, useSelector } from "react-redux";
import Load from "../../../../components/Load";
import { NotificationContainer } from "react-notifications";

function CarRegister() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [carImages, setCarImage] = useState([]);
  const [features, setFeatures] = useState([]);
  const { car } = useSelector((state) => state.car);
  const { loading } = useSelector((state) => state.common);
  const onSaveCar = () => {
    dispatch(saveCar(car, history));
  };

  return (
    <div className="module-register" style={{ padding: 0 }}>
      <Tabs>
        <div label="Thông tin" number="1">
          <SelfDriveMot features={features} setFeatures={setFeatures} />
        </div>
        <div label="Cho thuê" number="2">
          <SelfDriveHai />
        </div>
        <div label="Hình ảnh" number="3">
          <SelfDriveBa carImages={carImages} setCarImage={setCarImage} />
        </div>
      </Tabs>
      <div className="wrap-btn has-2btn">
        <div className="wr-btn">
          <Link to="#" className="btn btn-secondary btn--m">
            Quay lại
          </Link>
        </div>
        <div className="wr-btn">
          <button
            className="btn btn-primary btn--m"
            onClick={onSaveCar}
            disabled={loading}
          >
            {!loading ? <span> Đăng kí</span> : <Load isSmall={true} />}
          </button>
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default CarRegister;

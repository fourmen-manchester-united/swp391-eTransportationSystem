import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrand, getFeature } from "../../../../../store/actions/car.action";
import {
  SET_DESCRIPTION,
  SET_FEATURES,
  SET_FUEL,
  SET_LICENSE_PLATES,
  SET_MODEL,
  SET_SEATS,
  SET_TRANSMISSION,
  SET_YEAR_OF_MANUFACTURER,
} from "../../../../../store/constants/car.const";

function SelfDriveMot({ features, setFeatures }) {
  const dispatch = useDispatch();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getFeature());
      dispatch(getBrand());
    },
    // eslint-disable-next-line
    []
  );
  const [licensePlates, setLicensePlates] = useState("");
  const { feature } = useSelector((state) => state.car);
  const { car, brand } = useSelector((state) => state.car);
  const [provinceCodeFrom, setProvinceCodeFrom] = useState("");
  const provinceTo = brand.find(
    (prov) => prov.id === parseInt(provinceCodeFrom)
  );
  useEffect(
    () => {
      const timer = setTimeout(() => {
        dispatch({ type: SET_LICENSE_PLATES, payload: licensePlates });
      }, 1000);

      return () => clearTimeout(timer);
    },
    // eslint-disable-next-line
    [licensePlates]
  );
  useEffect(() => {
    setLicensePlates(car.licensePlates || "");
  }, [car]);

  const handleChangeModal = (e) => {
    dispatch({
      type: SET_MODEL,
      payload: parseInt(e.target.value),
    });
  };
  const handleChangeSeats = (e) => {
    dispatch({
      type: SET_SEATS,
      payload: parseInt(e.target.value),
    });
  };
  const handleChangeYearOfManufacture = (e) => {
    dispatch({
      type: SET_YEAR_OF_MANUFACTURER,
      payload: e.target.value,
    });
  };

  const handleChangeTransmission = (e) => {
    dispatch({
      type: SET_TRANSMISSION,
      payload: e.target.value,
    });
  };
  const handleChangeFuel = (e) => {
    dispatch({
      type: SET_FUEL,
      payload: e.target.value,
    });
  };
  const handleChangeDescription = (e) => {
    dispatch({
      type: SET_DESCRIPTION,
      payload: e.target.value,
    });
  };
  const handleChangeFeature = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures([...features, { id: value }]);
      dispatch({
        type: SET_FEATURES,
        payload: [...features, { id: value }],
      });
    } else {
      setFeatures(features.filter((e) => e.id !== value));
      dispatch({
        type: SET_FEATURES,
        payload: features.filter((e) => e.id !== value),
      });
    }
  };
  return (
    <div className="group form-default">
      <h6>Bi???n s??? xe</h6>
      <p className="fl">
        <span className="note" style={{ color: "red" }}>
          L??u ??: Bi???n s??? s??? kh??ng th??? thay ?????i sau khi ????ng k??.
        </span>
      </p>
      <div className="space m" />
      <div className="space m" />
      <div className="col-left">
        <div className="line-form">
          <div className="wrap-input">
            <input
              type="text"
              value={licensePlates}
              onChange={(event) => setLicensePlates(event.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="space m clear" />
      <div className="clear" />
      <h6>Th??ng tin c?? b???n</h6>
      <p className="fl">
        <span className="note" style={{ color: "red" }}>
          L??u ??: C??c th??ng tin c?? b???n s??? kh??ng th??? thay ?????i sau khi ????ng k??.
        </span>
      </p>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">H??ng xe</label>
          <span className="wrap-select">
            <select onChange={(e) => setProvinceCodeFrom(e.target.value)}>
              <option value="">Ch???n h??ng xe</option>
              {brand?.length > 0 &&
                brand.map((province) => (
                  <option value={province.id} key={province.id}>
                    {province.name}
                  </option>
                ))}
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">M???u xe</label>
          <span className="wrap-select">
            <select onChange={handleChangeModal}>
              <option value="">Ch???n h??ng xe tr?????c</option>
              {provinceTo !== undefined &&
                provinceTo.carModels.map((province) => (
                  <option value={province.id} key={province.id}>
                    {province.name}
                  </option>
                ))}
            </select>
          </span>
        </div>
      </div>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">S??? gh???</label>
          <span className="wrap-select">
            <select onChange={handleChangeSeats}>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={7}>7</option>
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">N??m s???n xu???t</label>
          <span className="wrap-select">
            <select onChange={handleChangeYearOfManufacture}>
              <option value={2001}>2001</option>
              <option value={2002}>2002</option>
              <option value={2003}>2003</option>
              <option value={2004}>2004</option>
              <option value={2005}>2005</option>
              <option value={2006}>2006</option>
              <option value={2007}>2007</option>
              <option value={2008}>2008</option>
              <option value={2009}>2009</option>
              <option value={2010}>2010</option>
            </select>
          </span>
        </div>
      </div>
      <div className="space clear" />
      <div className="col-left">
        <div className="line-form">
          <label className="label">Truy???n ?????ng</label>
          <span className="wrap-select">
            <select onChange={handleChangeTransmission}>
              <option value={"S??? t??? ?????ng"}>S??? t??? ?????ng</option>
              <option value={"S??? s??n"}>S??? s??n</option>
            </select>
          </span>
        </div>
      </div>
      <div className="col-right">
        <div className="line-form">
          <label className="label">Lo???i nhi??n li???u</label>
          <span className="wrap-select">
            <select onChange={handleChangeFuel}>
              <option value={"X??ng"}>X??ng</option>
              <option value={"D???u diesel"}>D???u diesel</option>
            </select>
          </span>
        </div>
      </div>
      <div className="space clear" />
      <h6>M?? t???</h6>
      <textarea
        className="textarea"
        placeholder="M?? t???"
        onChange={handleChangeDescription}
      />
      <div className="space m" />
      <h6>T??nh n??ng</h6>
      <div className="car-feature__sect">
        <div className="list-feature">
          {feature &&
            feature.map((feature, index) => (
              <div className="squaredThree have-label" key={index}>
                <input
                  id={feature.id}
                  type="checkbox"
                  name="filter-car-feature"
                  value={feature.id}
                  onChange={handleChangeFeature}
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
    </div>
  );
}

export default SelfDriveMot;

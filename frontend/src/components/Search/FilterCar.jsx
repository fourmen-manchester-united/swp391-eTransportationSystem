import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputRange from "react-input-range";
import { getFeature } from "../../store/actions/car.action";
import "./search.css";
function FilterCar({
  features,
  setFeatures,
  setPriceType,
  val,
  setVal,
  seats,
  setSeatsIn,
  setFuel,
  setTransmission,
  valYear,
  SetValYear,
  brandList,
  setBrandId,
  setPage,
  setCarList,
  carModels,
  setCarModel,
  carModel,
}) {
  const dispatch = useDispatch();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getFeature());
    },
    // eslint-disable-next-line
    []
  );
  const { feature } = useSelector((state) => state.car);

  const handleChangeModal = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setCarModel([...carModel, { id: value }]);
      setPage(1);
      setCarList([]);
    } else {
      setCarModel(carModel.filter((e) => e.id !== value));
      setPage(1);
      setCarList([]);
    }
  };
  const handleChangeFeature = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFeatures([...features, { id: value }]);
      setPage(1);
      setCarList([]);
    } else {
      setFeatures(features.filter((e) => e.id !== value));
      setPage(1);
      setCarList([]);
    }
  };
  const handleChangeSeat = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSeatsIn([...seats, { id: value }]);
      setPage(1);
      setCarList([]);
    } else {
      setSeatsIn(seats.filter((e) => e.id !== value));
      setPage(1);
      setCarList([]);
    }
  };
  const inputHandlerYear = (e) => {
    SetValYear(e.target.value);
    setPage(1);
    setCarList([]);
  };
  return (
    <div>
      <div className="filter-container">
        <div className="content-filter">
          <div className="rent-car has-scroll filter-body">
            <div className="scroll-inner">
              <span className="slstitle">Sắp xếp</span>
              <div className="line-form">
                <div className="wrap-select">
                  <select
                    onChange={(e) => {
                      setPriceType(e.target.value);
                      setPage(1);
                      setCarList([]);
                    }}
                  >
                    <option value="ALL">Tối ưu</option>
                    <option value="ASC">Ưu tiên giá thấp</option>
                    <option value="DESC">Ưu tiên giá cao</option>
                  </select>
                </div>
              </div>
              <span className="slstitle">Mức giá</span>
              <div className="line-form">
                <div className="range-slider">
                  <InputRange
                    step={5}
                    draggableTrack={false}
                    allowSameValues={false}
                    maxValue={3000}
                    minValue={0}
                    value={val}
                    onChange={setVal}
                  />
                  <span
                    className="range-slider__value2"
                    style={{ paddingTop: 5, float: "left", fontSize: 12 }}
                  >
                    {val.min + " VND"}
                  </span>
                  <span
                    className="range-slider__value2"
                    style={{ paddingTop: 5, float: "right", fontSize: 12 }}
                  >
                    {val.max + " VND"}
                  </span>
                </div>
              </div>
              <span className="slstitle">Loại xe</span>
              <div className="vehicle-type">
                <div className="squaredFour have-label">
                  <input
                    type="checkbox"
                    name="vt_1"
                    id="vt_1"
                    value={4}
                    onChange={handleChangeSeat}
                  />
                  <label className="description" htmlFor="vt_1">
                    <div className="thumbnail" style={{ padding: "0.5rem" }}>
                      <img
                        src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-4-sedan.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <span>4 chỗ</span>
                    <span className="extra-info">(01 xe)</span>
                  </label>
                </div>
                <div className="squaredFour have-label">
                  <input
                    type="checkbox"
                    name="vt_5"
                    id="vt_5"
                    value={5}
                    onChange={handleChangeSeat}
                  />
                  <label className="description" htmlFor="vt_5">
                    <div className="thumbnail" style={{ padding: "0.5rem" }}>
                      <img
                        src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-5-suv.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <span>5 chỗ</span>
                    <span className="extra-info">(01 xe)</span>
                  </label>
                </div>
                <div className="squaredFour have-label">
                  <input
                    type="checkbox"
                    name="vt_2"
                    id="vt_2"
                    value={7}
                    onChange={handleChangeSeat}
                  />
                  <label className="description" htmlFor="vt_2">
                    <div className="thumbnail" style={{ padding: "0.5rem" }}>
                      <img
                        src="https://n1-cstg.mioto.vn/m/vehicle-types/mf-7-suv.png"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <span>7 chỗ</span>
                    <span className="extra-info">(01 xe)</span>
                  </label>
                </div>
              </div>
              <span className="slstitle">Hãng xe</span>
              <div className="line-form">
                <div className="wrap-select">
                  <select
                    onChange={(e) => {
                      setBrandId(e.target.value);
                      setCarModel([]);
                      setPage(1);
                      setCarList([]);
                    }}
                  >
                    <option value={0}>Tất Cả</option>
                    {brandList?.length > 0 &&
                      brandList.map((brandList) => (
                        <option key={brandList.code} value={brandList.id}>
                          {brandList.name} (+{brandList.count})
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              {carModels.length > 0 && (
                <>
                  <span class="slstitle">Mẫu xe</span>
                  <div className="line-form">
                    <div>
                      {carModels.map((carModels, index) => (
                        <div className="squaredFour have-label" key={index}>
                          <div className="squaredFour have-label">
                            <input
                              id={carModels.id}
                              type="checkbox"
                              name="filter-car-model"
                              value={carModels.id}
                              onChange={handleChangeModal}
                            />
                            <label htmlFor={carModels.id}>
                              {carModels.name} ({carModels.count} xe)
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              <span className="slstitle">Truyền động</span>
              <div className="line-form">
                <div className="wrap-select">
                  <select
                    onChange={(e) => {
                      setTransmission(e.target.value);
                      setPage(1);
                      setCarList([]);
                    }}
                  >
                    <option value="">Tất cả</option>
                    <option value={"Số tự động"}>Số tự động</option>
                    <option value={"Số sàn"}>Số sàn</option>
                  </select>
                </div>
              </div>
              <div className="line-form">
                <div className="squaredFour have-label">
                  <input
                    id="ip_instant_booking"
                    type="checkbox"
                    name="instantBooking"
                  />
                </div>
              </div>
              <div></div>
              {/* <a href className="func-more block">
                Nâng cao <i className="i-arrow-down" />
              </a> */}
              <span className="slstitle">Năm sản xuất</span>
              <div className="line-form">
                <div className="range-slider">
                  <input
                    type="range"
                    min={2000}
                    max={2030}
                    val={valYear}
                    onInput={inputHandlerYear}
                    style={{
                      padding: 0,
                    }}
                  />
                  <span
                    className="range-slider__value2"
                    style={{ paddingTop: 5, float: "right", fontSize: 12 }}
                  >
                    {valYear === "0" ? "Bất kì" : valYear}
                  </span>
                </div>
              </div>
              <span className="slstitle">Nhiên liệu</span>
              <div className="line-form">
                <div className="wrap-select">
                  <select
                    onChange={(e) => {
                      setFuel(e.target.value);
                      setPage(1);
                      setCarList([]);
                    }}
                  >
                    <option value="">Tất cả</option>
                    <option value={"Xăng"}>Xăng</option>
                    <option value={"Dầu diesel"}>Dầu diesel</option>
                  </select>
                </div>
              </div>
              <span className="slstitle">Tính năng</span>
              <div className="car-feature__sect">
                <div className="list-feature">
                  {feature &&
                    feature.map((feature, index) => (
                      <div className="have-label squaredTwo" key={index}>
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
                            <span>{feature.name}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterCar;

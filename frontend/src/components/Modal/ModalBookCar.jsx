import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";
import {
  CLOSE_BOOK_MODAL,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../../store/constants/modal.const";
import { PayPalButton } from "react-paypal-button-v2";
import { postBookCar } from "../../store/actions/user.action";
import VouCherModal from "./VouCherModal";
import { Link } from "react-router-dom";
export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-top: 1px solid #343a40;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: #3bc9db;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #1098ad;
  }
`;
export const CloseButton = styled.div`
  margin: 10px;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: #e03131;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    background-color: #c92a2a;
  }
`;

const ModalBookCar = ({
  carDetail,
  endDate,
  startDate,
  numDate,
  load,
  setLoad,
}) => {
  const dispatch = useDispatch();
  const clientId =
    "AaD6Jk0vH-3xv3Znlq4ztjADzIHzaHABruRk8dCmnwbHB34rvJx7W-GUesEdMeX9kqSzXaaqnrEc3VGs";
  const [voucher, setVoucher] = useState({
    id: 0,
    code: "",
    percentage: 0,
    maxDiscount: 0,
  });
  const onSuccess = (details, data) => {
    if (details.status === "COMPLETED") {
      const totalCar =
        numDate > 6
          ? numDate > 29
            ? carDetail.price * numDate * priceMonth * priceVouCher
            : carDetail.price * numDate * priceWeek * priceVouCher
          : carDetail.price * numDate * priceVouCher;
      dispatch(
        postBookCar(
          carDetail.price,
          totalCar,
          moment(startDate).format("YYYY-MM-DD"),
          moment(endDate).format("YYYY-MM-DD"),
          voucher.id,
          carDetail.id,
          setLoad,
          load
        )
      );
    } else {
      alert("fail");
    }
    closeModalBook();
  };
  const priceVouCher = (100 - voucher.percentage) / 100;
  const priceWeek = (100 - carDetail.saleWeek) / 100;
  const priceMonth = (100 - carDetail.saleMonth) / 100;

  const totalPay = parseInt((carDetail.price * numDate * priceVouCher) / 24);
  const closeModalBook = () => {
    closeModal();
    dispatch({
      type: CLOSE_BOOK_MODAL,
    });
  };
  const onVouCher = (id) => {
    dispatch({
      type: OPEN_MODAL,
      payload: <VouCherModal setVoucher={setVoucher} />,
    });
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <div>
      <button className="func-remove-x" onClick={closeModalBook}>
        <i className="ic ic-remove-wh" />
      </button>

      <div
        className="fade modal in"
        role="dialog"
        tabIndex={-1}
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-details">
          <div className="modal-content" role="document">
            <div className="module-detail dt__wrapper">
              <div className="modal-header">
                <div className="info-car">
                  <h1 className="title-car">{carDetail.name}</h1>
                  <div className="group-line">
                    <span className="star">
                      <span className="star_rate-num">
                        {carDetail.totalRating > 0
                          ? carDetail.totalRating
                          : "ch??a c?? ????nh gi?? "}
                      </span>
                      <div
                        className="star-ratings"
                        title="1 Star"
                        style={{
                          position: "relative",
                          boxSizing: "border-box",
                          display: "inline-block",
                        }}
                      >
                        <svg
                          className="star-grad"
                          style={{
                            position: "absolute",
                            zIndex: 0,
                            width: 0,
                            height: 0,
                            visibility: "hidden",
                          }}
                        >
                          <defs>
                            <linearGradient
                              id="starGrad296798526677448"
                              x1="0%"
                              y1="0%"
                              x2="100%"
                              y2="0%"
                            >
                              <stop
                                offset="0%"
                                className="stop-color-first"
                                style={{
                                  stopColor: "rgb(0, 165, 80)",
                                  stopOpacity: 1,
                                }}
                              />
                              <stop
                                offset="0%"
                                className="stop-color-first"
                                style={{
                                  stopColor: "rgb(0, 165, 80)",
                                  stopOpacity: 1,
                                }}
                              />
                              <stop
                                offset="0%"
                                className="stop-color-final"
                                style={{
                                  stopColor: "rgb(203, 211, 227)",
                                  stopOpacity: 1,
                                }}
                              />
                              <stop
                                offset="100%"
                                className="stop-color-final"
                                style={{
                                  stopColor: "rgb(203, 211, 227)",
                                  stopOpacity: 1,
                                }}
                              />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div
                          className="star-container"
                          style={{
                            position: "relative",
                            display: "inline-block",
                            verticalAlign: "middle",
                          }}
                        >
                          <svg
                            viewBox="0 0 51 48"
                            className="widget-svg"
                            style={{
                              width: 17,
                              height: 17,
                              transition: "transform 0.2s ease-in-out 0s",
                            }}
                          >
                            <path
                              className="star"
                              d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
                              style={{
                                fill: "rgb(0, 165, 80)",
                                transition: "fill 0.2s ease-in-out 0s",
                              }}
                            />
                          </svg>
                        </div>
                      </div>
                    </span>
                    <div className="bar-line" />
                    <p>
                      {" "}
                      <span className="value"> {carDetail.totalBook} </span>
                      chuy???n
                    </p>
                  </div>
                </div>
              </div>

              <div className="modal-body detail-container">
                <div className="content-detail">
                  <div className="info-car--desc no-pd cover-car ">
                    <div
                      className="car-img swiper-slide swiper-slide-active"
                      data-swiper-slide-index={0}
                      style={{ width: 736 }}
                    >
                      <div className="fix-img">
                        <img
                          src={carDetail.carImages[0].image}
                          alt="Mioto - Thu?? xe t??? l??i"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar-detail">
                  <div className="rent-box rent-car" id="booking-sidebar">
                    <div className="price">
                      <h3>
                        {carDetail.price} <span> / ng??y</span>
                      </h3>
                    </div>
                    <div className="notif-box">
                      <div className="notif-body">
                        <p>
                          {" "}
                          <label>
                            Thu?? tu???n gi???m <span> {carDetail.saleWeek}% </span>
                          </label>{" "}
                          -{" "}
                          <label>
                            Thu?? th??ng gi???m <span> {carDetail.saleMonth}%</span>
                          </label>
                        </p>
                      </div>
                    </div>
                    <div className="line-form notice-form note">
                      <p className="d-flex-between">
                        Ng??y nh???n xe
                        <span>
                          {startDate
                            ? moment(startDate).format("DD/MM/YYYY")
                            : "ch??a ch???n ng??y nh???n"}
                        </span>
                      </p>
                      <p className="d-flex-between">
                        Ng??y tr??? xe
                        <span>
                          {endDate
                            ? moment(endDate).format("DD/MM/YYYY")
                            : "ch??a ch???n ng??y tr???"}
                        </span>
                      </p>
                    </div>
                    <div className="line-form local">
                      <div className="note">
                        <a href="/" className="location-picker">
                          {" "}
                          <svg
                            className="icsvg"
                            viewBox="0 0 24 24"
                            style={{ fill: "none" }}
                          >
                            {" "}
                            <path
                              d="m12 22.5c5.799 0 10.5-4.701 10.5-10.5 0-5.799-4.701-10.5-10.5-10.5-5.799 0-10.5 4.701-10.5 10.5 0 5.799 4.701 10.5 10.5 10.5zm0 1.5c6.6274 0 12-5.3726 12-12 0-6.6274-5.3726-12-12-12-6.6274 0-12 5.3726-12 12 0 6.6274 5.3726 12 12 12z"
                              clipRule="evenodd"
                              fill="#141414"
                              fillRule="evenodd"
                            />{" "}
                            <path
                              d="m7.5 10.494c0-2.4778 2.0187-4.4937 4.5-4.4937 2.4813 0 4.5 2.0159 4.5 4.4937 0 1.2789-0.7204 2.918-2.1412 4.8719-1.0399 1.4301-2.0635 2.484-2.1066 2.5281-0.0662 0.068-0.1572 0.1063-0.2522 0.1063s-0.186-0.0383-0.2522-0.1063c-0.0431-0.0442-1.0667-1.098-2.1066-2.5281-1.4208-1.9539-2.1412-3.593-2.1412-4.8719zm4.5095 1.5064c0.9955 0 1.8025-0.8059 1.8025-1.8 0-0.99411-0.807-1.8-1.8025-1.8s-1.8025 0.80589-1.8025 1.8c0 0.9941 0.807 1.8 1.8025 1.8z"
                              clipRule="evenodd"
                              fill="#141414"
                              fillRule="evenodd"
                            />{" "}
                          </svg>{" "}
                          <span>{carDetail.addressInfo}</span>
                        </a>
                        <p className="subnote">
                          {" "}
                          ?????a ch??? c??? th??? s??? ???????c hi???n th??? sau khi ?????t c???c
                        </p>
                      </div>
                    </div>
                    <div className="car-bill">
                      <h4 className="text-center">Chi ti???t gi??</h4>
                      <div className="bill-wrap">
                        <div className="group">
                          <p>????n gi?? thu?? </p>
                          <div className="tooltip">
                            <i className="ic ic-question-mark" />
                            <div className="tooltip-text">
                              Gi?? thu?? xe kh??ng bao g???m ti???n x??ng. Khi k???t th??c
                              chuy???n ??i, b???n s??? ????? x??ng v??? l???i m???c ban ?????u nh??
                              khi nh???n xe.
                            </div>
                          </div>
                          <p />
                          <span>
                            <span> {carDetail.price} / ng??y</span>
                          </span>
                        </div>
                        <div className="group has-line">
                          <p>T???ng ph?? thu?? xe</p>
                          <span>
                            <span>{carDetail.price * numDate}</span> x
                            <strong>{numDate} ng??y</strong>
                          </span>
                        </div>
                        {numDate > 6 && (
                          <>
                            {numDate > 29 ? (
                              <div className="group has-line">
                                <p>
                                  <p>Gi?? gi???m theo th??ng</p>
                                </p>
                                <span>
                                  <span>
                                    {carDetail.price * numDate -
                                      carDetail.price * numDate * priceMonth}
                                    ??
                                  </span>{" "}
                                  x<strong>{carDetail.saleMonth} %</strong>
                                </span>
                              </div>
                            ) : (
                              <div className="group has-line">
                                <p>
                                  <p>Gi?? gi???m theo tu???n</p>
                                </p>
                                <span>
                                  <span>
                                    {carDetail.price * numDate -
                                      carDetail.price * numDate * priceWeek}
                                    ??
                                  </span>{" "}
                                  x<strong>{carDetail.saleWeek} %</strong>
                                </span>
                              </div>
                            )}
                          </>
                        )}
                        {voucher.id > 0 && (
                          <div className="group has-line">
                            <p>
                              <p>Gi?? ???????c ph??p gi???m</p>
                            </p>
                            <span>
                              <span>
                                {carDetail.price * numDate -
                                  carDetail.price * numDate * priceVouCher}
                                ??
                              </span>{" "}
                              x<strong>{voucher.percentage} %</strong>
                            </span>
                          </div>
                        )}

                        <div className="group has-line">
                          <p>
                            <strong>T???ng c???ng</strong>
                          </p>
                          <span>
                            <strong>
                              <span>
                                {numDate > 6 ? (
                                  <>
                                    {numDate > 29 ? (
                                      <>
                                        {" "}
                                        {carDetail.price *
                                          numDate *
                                          priceMonth *
                                          priceVouCher}
                                        ??
                                      </>
                                    ) : (
                                      <>
                                        {" "}
                                        {carDetail.price *
                                          numDate *
                                          priceWeek *
                                          priceVouCher}
                                        ??
                                      </>
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {carDetail.price * numDate * priceVouCher}??
                                  </>
                                )}
                              </span>
                            </strong>
                          </span>
                        </div>
                      </div>
                      <div className="promotion-code d-flex">
                        <Link
                          to="#"
                          className="title-new"
                          onClick={() => onVouCher(carDetail.id)}
                        >
                          <h4 className="lstitle-new">M?? khuy???n m??i</h4>
                        </Link>
                      </div>

                      <div className="space m" />
                      <div className="promotion-code d-flex"></div>
                      <PayPalButton
                        shippingPreference="NO_SHIPPING"
                        amount={totalPay}
                        options={{
                          clientId,
                        }}
                        onSuccess={(details, data) => {
                          onSuccess(details, data);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="content-detail">
                  <div className="info-car--desc">
                    <div className="group">
                      <span className="lstitle-new">?????C ??I???M</span>
                      <div className="ctn-desc-new">
                        <ul className="features">
                          <li>
                            <i className="ic ic-chair" /> S??? gh???:{" "}
                            {carDetail.seats}
                          </li>
                          <li>
                            <i className="ic ic-trans" /> Truy???n ?????ng:{" "}
                            {carDetail.transmission}
                          </li>
                          <li>
                            <i className="ic ic-diesel" /> Nhi??n li???u:{" "}
                            {carDetail.fuel}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="group">
                      <span className="lstitle-new">M?? T???</span>
                      <div className="ctn-desc-new">
                        <pre>{carDetail.description}</pre>
                      </div>
                    </div>
                    <div className="group">
                      <span className="lstitle-new">T??NH N??NG</span>
                      <div className="ctn-desc-new">
                        {carDetail.features.length > 0 ? (
                          <>
                            <ul className="accessories">
                              {carDetail.features.map((feature, index) => (
                                <li key={index}>
                                  <img
                                    className="img-ico car-img-sw"
                                    src={feature.icon}
                                    alt="Thu?? xe"
                                  />
                                  {feature.name}
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          "kh??ng c?? t??nh n??ng"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalBookCar;

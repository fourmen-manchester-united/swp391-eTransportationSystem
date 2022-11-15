import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import GetDate from "../DateRange";
import Load from "../Load";
import { extendCar } from "./../../store/actions/car.action";

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
export const VerifiedButton = styled.div`
  margin: 10px;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: #00a550;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #009648;
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

const Message = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.15rem;
`;

const ExtendCar = ({ id, carId, startDates, setHandleGrant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [carDetail, setCarDetail] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/car/details/${carId}`,
      })
        .then((res) => {
          setCarDetail(res.data);
          // setStartDate(null);
          // setEndDate(null);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [carId]);
  const disabledDate =
    carDetail &&
    carDetail.books
      .map((book) =>
        book.dates.map((data) => {
          return new Date(data);
        })
      )
      .flat();
  const handleDateChange = (dates) => {
    // setStartDate(dates.startDate);
    setEndDate(dates.endDate);
  };
  const onExtendCar = () => {
    setIsLoading(true);
    dispatch(
      extendCar(id, moment(endDate).format("YYYY-MM-DD"), setHandleGrant)
    );
    closeModal();
    setIsLoading(false);
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <div>
      <>
        <Message>Bạn có chắc chắn gia hạn chuyến xe này không?</Message>
        {carDetail ? (
          <div className="modal-body">
            <div className="form-default form-s">
              <div className="line-form has-timer">
                <GetDate
                  onDateChange={handleDateChange}
                  focusedRange={[0, 0]}
                  minDate={new Date()}
                  editableDateInputs={true}
                  showDateDisplay={false}
                  disabledDates={disabledDate}
                />
              </div>
              <div className="line-form notice-form note">
                <p className="d-flex-between">
                  Ngày nhận xe
                  <span>
                    {startDates
                      ? moment(startDates).format("DD/MM/YYYY")
                      : "chưa chọn ngày nhận"}
                  </span>
                </p>
                <p className="d-flex-between">
                  Ngày trả xe
                  <span>
                    {endDate
                      ? moment(endDate).format("DD/MM/YYYY")
                      : "chưa chọn ngày trả"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <Load isSmall={true} />
        )}
        <ModalFooter>
          <CloseButton onClick={onExtendCar} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Gia Hạn"}
          </CloseButton>
          <ConfirmButton ConfirmButton onClick={closeModal}>
            Hủy
          </ConfirmButton>
        </ModalFooter>
      </>
    </div>
  );
};

export default ExtendCar;

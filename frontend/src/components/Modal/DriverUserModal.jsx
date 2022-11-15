import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getDriver } from "../../store/actions/user.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import Load from "../Load";
import { putDriver } from "./../../store/actions/car.action";

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

const DriverUserModal = ({ id, setHandleGrant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onFailed = () => {
    setIsLoading(true);
    dispatch(putDriver(id, "FAILED", setHandleGrant));
    closeModal();
    setIsLoading(false);
  };
  const onVerified = () => {
    setIsLoading(true);
    dispatch(putDriver(id, "VERIFIED", setHandleGrant));
    closeModal();
    setIsLoading(false);
  };
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getDriver(id));
    },
    // eslint-disable-next-line
    [id]
  );
  const { driver } = useSelector((state) => state.user);
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };

  return (
    <div>
      <>
        <Message>
          Bạn có chắc chắn Chặn hoặc cấp quyền cho bằng lái này không?
        </Message>
        {driver ? (
          <form noValidate>
            <div className="modal-body">
              <div className="form-default form-s">
                <div className="line-form">
                  <label className="label">Số GPLX</label>
                  <p className="info">
                    <i className="ic ic-infomation" />
                    Dãy 12 chữ số ở mặt trước GPLX
                  </p>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="numberDrivingLicense"
                      placeholder="Nhập số GPLX đã cấp"
                      value={driver.numberDrivingLicense}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">Họ tên</label>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nhập đầy đủ họ tên"
                      value={driver.name}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">Ngày sinh</label>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="birthDate"
                      placeholder="Nhập đầy đủ ngày sinh"
                      value={driver.birthDate}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">Ảnh bằng lái xe</label>
                  <div className="list-photos">
                    <label>Hình ảnh GPLX mặt trước</label>
                    <p className="info">
                      <i className="ic ic-infomation" />
                      Hình chụp cần thấy được
                      <span className="fontWeight-5">Ảnh đại diện</span> và
                      <span className="fontWeight-5">Số GPLX</span>
                    </p>
                    <ul>
                      {driver.imageFront !== "string" &&
                        driver.imageFront !== null && (
                          <li>
                            <div
                              className="obj-photo"
                              style={{
                                backgroundImage: `url(${driver.imageFront})`,
                              }}
                            ></div>
                          </li>
                        )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </form>
        ) : (
          <Load />
        )}
        <ModalFooter>
          <ConfirmButton onClick={onFailed} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Chặn"}
          </ConfirmButton>
          <VerifiedButton onClick={onVerified} disabled={isLoading}>
            {isLoading ? "Deleting..." : "Cấp Quyền"}
          </VerifiedButton>
          <CloseButton onClick={closeModal}> Hủy </CloseButton>
        </ModalFooter>
      </>
    </div>
  );
};

export default DriverUserModal;

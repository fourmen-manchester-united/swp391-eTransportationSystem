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
          B???n c?? ch???c ch???n Ch???n ho???c c???p quy???n cho b???ng l??i n??y kh??ng?
        </Message>
        {driver ? (
          <form noValidate>
            <div className="modal-body">
              <div className="form-default form-s">
                <div className="line-form">
                  <label className="label">S??? GPLX</label>
                  <p className="info">
                    <i className="ic ic-infomation" />
                    D??y 12 ch??? s??? ??? m???t tr?????c GPLX
                  </p>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="numberDrivingLicense"
                      placeholder="Nh???p s??? GPLX ???? c???p"
                      value={driver.numberDrivingLicense}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">H??? t??n</label>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nh???p ?????y ????? h??? t??n"
                      value={driver.name}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">Ng??y sinh</label>
                  <div className="wrap-input ">
                    <input
                      type="text"
                      name="birthDate"
                      placeholder="Nh???p ?????y ????? ng??y sinh"
                      value={driver.birthDate}
                    />
                  </div>
                </div>
                <div className="line-form">
                  <label className="label">???nh b???ng l??i xe</label>
                  <div className="list-photos">
                    <label>H??nh ???nh GPLX m???t tr?????c</label>
                    <p className="info">
                      <i className="ic ic-infomation" />
                      H??nh ch???p c???n th???y ???????c
                      <span className="fontWeight-5">???nh ?????i di???n</span> v??
                      <span className="fontWeight-5">S??? GPLX</span>
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
            {isLoading ? "Deleting..." : "Ch???n"}
          </ConfirmButton>
          <VerifiedButton onClick={onVerified} disabled={isLoading}>
            {isLoading ? "Deleting..." : "C???p Quy???n"}
          </VerifiedButton>
          <CloseButton onClick={closeModal}> H???y </CloseButton>
        </ModalFooter>
      </>
    </div>
  );
};

export default DriverUserModal;

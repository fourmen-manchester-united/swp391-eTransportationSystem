import React, { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useIsLogin } from "../../hooks/useIsLogin";
import { putBlock } from "../../store/actions/car.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";

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

const Message = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 1.15rem;
`;

const BlockUserModal = ({ id, status, setHandleGrant }) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const onBlockAdmin = () => {
    setIsLoading(true);
    NotificationManager.error("can't block admin!!");
    closeModal();
    setIsLoading(false);
  };
  const onBlockUser = () => {
    setIsLoading(true);
    dispatch(putBlock(id, "BLOCKED", setHandleGrant));
    closeModal();
    setIsLoading(false);
  };
  const onUnBlockUser = () => {
    setIsLoading(true);
    dispatch(putBlock(id, "ACTIVE", setHandleGrant));
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
      {status === "ACTIVE" ? (
        <>
          {isLogin.id === id ? (
            <>
              <Message>Bạn có chắc chắn Chặn người dùng này không?</Message>
              <ModalFooter>
                <ConfirmButton onClick={onBlockAdmin} disabled={isLoading}>
                  {isLoading ? "Deleting..." : "Đồng Ý"}
                </ConfirmButton>
                <CloseButton onClick={closeModal}> Hủy </CloseButton>
              </ModalFooter>
            </>
          ) : (
            <>
              <Message>Bạn có chắc chắn Chặn người dùng này không?</Message>
              <ModalFooter>
                <ConfirmButton onClick={onBlockUser} disabled={isLoading}>
                  {isLoading ? "Deleting..." : "Đồng Ý"}
                </ConfirmButton>
                <CloseButton onClick={closeModal}> Hủy </CloseButton>
              </ModalFooter>
            </>
          )}
        </>
      ) : (
        <>
          <Message>Bạn có chắc chắn bỏ Chặn người dùng này không?</Message>
          <ModalFooter>
            <ConfirmButton onClick={onUnBlockUser} disabled={isLoading}>
              {isLoading ? "Deleting..." : "Đồng Ý"}
            </ConfirmButton>
            <CloseButton onClick={closeModal}> Hủy </CloseButton>
          </ModalFooter>
        </>
      )}
    </div>
  );
};

export default BlockUserModal;

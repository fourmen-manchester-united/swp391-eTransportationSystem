import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { useIsLogin } from "../../hooks/useIsLogin";
import { review } from "../../store/actions/car.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
// import Load from "../Load";
import { FiveStar } from "./../FiveStar/fiveStar";

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

const ReviewModal = ({ id, setHandleGrant }) => {
  //   const { loading } = useIsLogin();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [saveRate, setSaveRate] = useState(0);
  const [content, setContent] = useState("");
  const clearSaveRate = (e) => {
    if (e.target.id && e.target.id === "long") {
      setSaveRate(0);
    }
  };
  const onReview = () => {
    setIsLoading(true);
    dispatch(review(id, content, saveRate, setHandleGrant));
    closeModal();
    setIsLoading(false);
    setSaveRate(0);
    setContent("");
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <div>
      <Message>Bạn có chắc chắn bỏ quyền người dùng này không?</Message>
      <div
        className="form-search location has-placeholder "
        id="long"
        onClick={clearSaveRate}
        style={{ padding: "0 30px 30px 30px" }}
      >
        <FiveStar
          saveRate={saveRate}
          changeSaveRate={(rate) => setSaveRate(rate)}
        />
        <div
          className="wrap-input"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div
            className="here-autocomplete"
            style={{
              width: "100%",
              border: " 2px solid #DDD",
              borderRadius: "5px",
            }}
          >
            <input
              type="text"
              placeholder="đánh giá ..."
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <ModalFooter>
        <ConfirmButton onClick={onReview} disabled={isLoading}>
          {isLoading ? "Deleting..." : "Đồng Ý"}
        </ConfirmButton>
        <CloseButton onClick={closeModal}> Hủy </CloseButton>
      </ModalFooter>
    </div>
  );
};

export default ReviewModal;

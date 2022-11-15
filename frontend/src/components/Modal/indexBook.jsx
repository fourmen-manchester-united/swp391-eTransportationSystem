import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, Switch } from 'react-router-dom';
import styled from "styled-components";
import { CLOSE_BOOK_MODAL } from "../../store/constants/modal.const";
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8;
  width: 100%;
  height: ${(props) => (props.isOpen ? "100vh" : "0px")};
  display: block;
  transition: all 0.3s;
  overflow: hidden;
`;

const Modal = styled.div`
  width: 90%;
  height: inherit;
  border-radius: 10px;
  position: absolute;
  top: 55%;
  left: 50%;
  z-index: 8;
  transform: translate(-50%, -50%);
`;
export const ModalContent = styled.div``;

const ModalShadow = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  backdrop-filter: blur(2px);
`;
export function ModalBookContainer() {
  const { isBookOpen, contentBook } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  function close() {
    dispatch({
      type: CLOSE_BOOK_MODAL,
    });
  }

  return ReactDOM.createPortal(
    <Container isOpen={isBookOpen}>
      <ModalShadow onClick={close} />
      <Modal>
        <ModalContent>{contentBook}</ModalContent>
      </Modal>
    </Container>,
    document.getElementById("root_modal_book")
  );
}

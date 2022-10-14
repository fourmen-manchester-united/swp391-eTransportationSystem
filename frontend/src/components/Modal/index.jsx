import React from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
// import { BrowserRouter, Switch } from 'react-router-dom';
import { CLOSE_MODAL } from "../../store/constants/modal.const";

export function ModalContainer() {
  const { isOpen, content } = useSelector((state) => state.modal);
  console.log(
    "🚀 ~ file: index.jsx ~ line 9 ~ ModalContainer ~ isOpen",
    isOpen
  );
  const dispatch = useDispatch();
  function close() {
    dispatch({
      type: CLOSE_MODAL,
    });
  }

  return ReactDOM.createPortal(
    <div className={`${isOpen ? "" : "bm-burger-button"} `}>
      <div className="modal-backdrop fade in" />
      <div className="fade in modal" style={{ display: "block" }}>
        <div className="modal-sm modal-dialog modal-dialog">
          <div className="modal-content" role="document">
            <div className="modal-header" style={{ padding: "25px 20px 40px" }}>
              <button type="button" className="close" onClick={close}>
                <span aria-hidden="true">×</span>
                <span className="sr-only" />
              </button>
            </div>
            {content}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root_modal")
  );
}

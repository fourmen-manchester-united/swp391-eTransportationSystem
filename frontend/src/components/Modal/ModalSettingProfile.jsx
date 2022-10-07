import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CLOSE_MODAL } from "../../store/constants/modal.const";

export function ModalSettingProfile() {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <>
      <div className="modal-header">
        <h4 className="modal-title">Cập nhật thông tin</h4>
      </div>
      <div className="modal-body">
        <div className="form-default form-s">
          <div className="line-form">
            <div className="wrap-input has-ico">
              <i className="ic ic-user-fill" />
              <input
                type="text"
                name="ip_displayname"
                placeholder="Tên hiển thị"
                defaultValue="Long Trần"
              />
            </div>
          </div>
          <div className="line-form">
            <div className="wrap-input has-ico">
              <i className="ic ic-calendar-fill" />
              <input name="ip_dob" defaultValue="01-01-1950" />
            </div>
          </div>
          <div className="line-form">
            <div className="wrap-select">
              <select name="ip_gender">
                <option value={1}>Nam</option>
                <option value={2}>Nữ</option>
              </select>
            </div>
          </div>
          <div className="clear" />
          <Link
            to="#"
            className="btn btn-primary btn--m"
            type="button"
            onClick={closeModal}
          >
            Cập nhật
          </Link>
        </div>
      </div>
    </>
  );
}

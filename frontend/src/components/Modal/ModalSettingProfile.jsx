import moment from "moment";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useIsLogin } from "../../hooks/useIsLogin";
import { putUpdateProfile } from "../../store/actions/user.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import GetDate from "../DateRange";
import Load from "../Load";

export function ModalSettingProfile({ users, reload, setReload }) {
  const dispatch = useDispatch();
  const { loading } = useIsLogin();
  const [user, setUsers] = useState(users);
  const onUpdateUser = (e) => {
    e.preventDefault();
    dispatch(
      putUpdateProfile(user, user.avatar, user.thumnail, reload, setReload)
    );
    closeModal();
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUsers({
      ...user,
      [name]: value,
    });
  };
  const handleDateChange = (dates) => {
    setUsers({
      ...user,
      birthDate: moment(dates.startDate).format("YYYY-MM-DD"),
    });
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <>
      <div className="modal-header" style={{ padding: "0px 20px 40px" }}>
        <h4 className="modal-title">Cập nhật thông tin</h4>
      </div>
      <form onSubmit={onUpdateUser} noValidate>
        <div className="modal-body">
          <div className="form-default form-s">
            <div className="line-form">
              <div className="wrap-input has-ico">
                <i className="ic ic-user-fill" />
                <input
                  type="text"
                  name="name"
                  placeholder="Tên hiển thị"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="line-form">
              <div className="wrap-input has-ico">
                <i className="ic ic-calendar-fill" />
                <input name="ip_dob" value={user.birthDate} />
              </div>
            </div>
            <GetDate
              onDateChange={handleDateChange}
              focusedRange={[0, 0]}
              maxDate={new Date()}
              // editableDateInputs={true}
              showDateDisplay={false}
            />
            <div className="line-form">
              <div className="wrap-select">
                <select
                  name="gender"
                  value={user.gender}
                  onChange={handleChange}
                >
                  <option value={"OTHER"}>Khác</option>
                  <option value={"FEMALE"}>Nữ</option>
                  <option value={"MALE"}>Nam</option>
                </select>
              </div>
            </div>
            <div className="clear" />
            {loading ? (
              <button
                className="btn btn-primary btn--m"
                style={{
                  width: "96.5%",
                  opacity: ".4",
                  display: "flex",
                  justifyContent: "center",
                }}
                disabled
              >
                <span> Cập nhật</span>
                <Load isSmall={true} />
              </button>
            ) : (
              <button className="btn btn-primary btn--m">
                <span> Cập nhật</span>
              </button>
            )}
            {/* <Link
              to="#"
              className="btn btn-primary btn--m"
              type="button"
              onClick={closeModal}
            >
              Cập nhật
            </Link> */}
          </div>
        </div>
      </form>
    </>
  );
}

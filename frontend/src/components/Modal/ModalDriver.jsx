import moment from "moment";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { putUpdateDriver } from "../../store/actions/user.action";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import GetDate from "../DateRange";
import Load from "../Load";

export function ModalDriver({ driver, reload, setReload }) {
  const dispatch = useDispatch();
  const { loading } = useIsLogin();
  const userLogin = localStorage.getItem("userLogin");
  const account_Id = userLogin ? JSON.parse(userLogin).id : "";
  const [selectedFile, setSelectedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUsers] = useState(driver);
  const [imageFront, setImageFront] = useState(driver.imageFront);
  useEffect(
    () => {
      const uploadImage = async () => {
        setIsLoading(true);
        if (!selectedFile) {
          setIsLoading(false);
          return;
        }
        const { isSuccess, imageUrl, message } = await storeImageToFireBase(
          selectedFile
        );
        if (isSuccess) {
          setImageFront(imageUrl);
          setIsLoading(false);
          return imageUrl;
        } else {
          console.log(message);
        }
        setIsLoading(false);
      };
      uploadImage();
    },
    // eslint-disable-next-line
    [selectedFile]
  );
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
  };
  const handleDateChange = (dates) => {
    setUsers({
      ...user,
      birthDate: moment(dates.startDate).format("YYYY-MM-DD"),
    });
  };
  const onUpdateUser = (e) => {
    e.preventDefault();
    dispatch(
      putUpdateDriver(
        account_Id,
        user.numberDrivingLicense,
        user.name,
        user.birthDate,
        imageFront,
        reload,
        setReload
      )
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
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <>
      <div className="modal-header" style={{ padding: "0px 20px 40px" }}>
        <h4 className="modal-title">Cập nhật giấy phép lái xe</h4>
      </div>
      <form onSubmit={onUpdateUser} noValidate>
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
                  value={user.numberDrivingLicense}
                  onChange={handleChange}
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
                  <li>
                    <div className="obj-photo">
                      <span className="ins">
                        <div className="fileUploader ">
                          <div className="fileContainer">
                            {isLoading ? (
                              <>
                                <button
                                  type="button"
                                  disabled
                                  style={{
                                    opacity: ".4",
                                    display: "flex",
                                    justifyContent: "center",
                                  }}
                                  className="chooseFileButton btn btn-primary btn--m"
                                >
                                  Chọn hình <Load isSmall={true} />
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  type="button"
                                  className="chooseFileButton btn btn-primary btn--m"
                                >
                                  Chọn hình
                                </button>
                                <input
                                  type="file"
                                  name="profileImageUrl"
                                  accept="image/*"
                                  onChange={onSelectFile}
                                  id="upload"
                                  className="btn"
                                  style={{
                                    opacity: 0,
                                    zIndex: 1,
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    position: "absolute",
                                  }}
                                />
                              </>
                            )}
                          </div>
                        </div>
                      </span>
                    </div>
                  </li>
                  {imageFront !== "string" && imageFront !== null && (
                    <li>
                      <div
                        className="obj-photo"
                        style={{
                          backgroundImage: `url(${imageFront})`,
                        }}
                      >
                        <Link to="#" className="func-remove">
                          <i className="ic ic-remove" />
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
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
          </div>
        </div>
      </form>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Load from "../../../../components/Load";
import { NotificationContainer } from "react-notifications";
import { ModalSettingProfile } from "../../../../components/Modal/ModalSettingProfile";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { getDriver, getUser } from "../../../../store/actions/user.action";
import { OPEN_MODAL } from "../../../../store/constants/modal.const";
import { useState } from "react";
import { ModalUploadAvatar } from "../../../../components/Modal/ModalUploadAvatar";
import { ModalDriver } from "../../../../components/Modal/ModalDriver";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const [reload, setReload] = useState(false);
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getUser(id));
      dispatch(getDriver(id));
    },
    // eslint-disable-next-line
    [id, reload]
  );
  const { loading } = useSelector((state) => state.common);
  const { users, driver } = useSelector((state) => state.user);

  const onUpdateProfile = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <ModalSettingProfile
          users={users}
          reload={reload}
          setReload={setReload}
        />
      ),
    });
  };
  const onUpdateAvatar = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <ModalUploadAvatar
          users={users}
          reload={reload}
          setReload={setReload}
          w={true}
        />
      ),
    });
  };
  const onUpdateThumbnail = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <ModalUploadAvatar
          users={users}
          reload={reload}
          setReload={setReload}
          w={false}
        />
      ),
    });
  };
  const onUpdateDriver = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: (
        <ModalDriver driver={driver} reload={reload} setReload={setReload} />
      ),
    });
  };
  return (
    <>
      {loading || !users ? (
        <div style={{ textAlign: "center" }}>
          <Load />
        </div>
      ) : (
        <>
          <section className="body">
            <div
              className="avatar-pro"
              style={{ position: "relative" }}
              onClick={() => onUpdateThumbnail()}
            >
              <div
                className="cover-profile new-profile"
                style={{
                  backgroundImage: `${
                    users.thumnail === null
                      ? `url("https://source.unsplash.com/random/?car, automobile,${users.id}")`
                      : `url("${users.thumnail}")`
                  }`,
                }}
              />
            </div>
            <div className="profile__sect">
              <div className="content-profile--new">
                <div className="desc-profile desc-account">
                  <div className="avatar-box">
                    <div
                      className="avatar avatar--xl has-edit"
                      onClick={() => onUpdateAvatar()}
                      style={{ zIndex: 3 }}
                    >
                      <div
                        className="avatar-img"
                        style={{
                          backgroundImage: `${
                            users.avatar === null
                              ? `url("https://source.unsplash.com/random/?car, automobile,${users.name}")`
                              : `url("${users.avatar}")`
                          }`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="snippet">
                    <div className="profile-info">
                      <div className="item-content">
                        <div className="item-title">
                          <p>{users.name}</p>
                          {isLogin && (
                            <>
                              {isLogin.id === parseInt(id) ? (
                                <Link
                                  to="#"
                                  className="func-edit"
                                  title="Chỉnh sửa"
                                  onClick={() => onUpdateProfile()}
                                >
                                  <i className="ic ic-edit" />
                                </Link>
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                      {/* <div className="item-points">
                        <svg
                          className="icsvg icsvg-mipoint"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            r={11}
                            transform="matrix(-1 0 0 1 11 11)"
                            fill="#00A550"
                          />
                          <path
                            d="M10.022 5.51l-.947 2.738c-.128.37-.496.62-.91.62H5.101c-.928 0-1.313 1.115-.563 1.627l2.48 1.692a.87.87 0 01.347 1.005l-.947 2.738c-.286.828.722 1.517 1.472 1.005l2.48-1.692c.335-.229.79-.229 1.125 0l2.479 1.692c.75.512 1.759-.176 1.472-1.005l-.947-2.738a.87.87 0 01.348-1.005l2.479-1.692c.75-.512.365-1.626-.562-1.626h-3.065c-.415 0-.782-.251-.91-.621l-.947-2.738c-.287-.828-1.534-.828-1.82 0z"
                            fill="#fff"
                          />
                        </svg>
                        <span>0 điểm</span>
                        <div className="tooltip">
                          <i className="ic ic-question-mark" />
                          <div className="tooltip-text">
                            Điểm thưởng dùng để đổi quà trong mục Quà tặng
                          </div>
                        </div>
                      </div> */}
                    </div>
                    <div className="line-info">
                      <div className="d-flex">
                        <div
                          className="infop"
                          style={{ width: "120px", marginRight: "10px" }}
                        >
                          <span className="label">Ngày sinh </span>
                          <strong className="ctn">{users.birthDate}</strong>
                        </div>
                        <div className="infop">
                          <span className="label">Giới tính </span>
                          <strong className="ctn">{users.gender}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc-profile">
                  <div className="information information--acc">
                    <div className="inside">
                      <ul>
                        <li>
                          <span className="label">Điện thoại</span>
                          <span className="ctn">
                            <span />
                            <Link to="#" className="func-edit" title="Edit">
                              <i className="ic ic-edit" />
                            </Link>
                            {users.phone}
                          </span>
                        </li>
                        <li>
                          <span className="label">GPLX</span>
                          <span className="ctn">
                            {driver && driver.status === "PENDING" ? (
                              <>
                                <span>
                                  <i className="ic ic-verifying" />
                                </span>
                                <Link
                                  to="#"
                                  className="verify btn btn--s prevent-click"
                                >
                                  đang xác thực GPLX
                                </Link>
                              </>
                            ) : (
                              <>
                                {driver && driver.status === "VERIFIED" ? (
                                  <>
                                    <span>
                                      <i className="ic ic-verify" />
                                    </span>
                                    <Link
                                      to="#"
                                      className="verify btn btn--s prevent-click"
                                    >
                                      Đã xác thực GPLX
                                    </Link>
                                  </>
                                ) : (
                                  <>
                                    <span>
                                      <i className="ic ic-error" />
                                    </span>
                                    <Link
                                      to="#"
                                      className="verify btn btn--s prevent-click"
                                    >
                                      Chưa xác thực GPLX
                                    </Link>
                                  </>
                                )}
                              </>
                            )}
                            <Link
                              to="#"
                              className="func-edit"
                              onClick={() => onUpdateDriver()}
                            >
                              <i className="ic ic-edit" />
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="label">Email</span>
                          <span className="ctn">
                            <span>
                              <i className="ic ic-verify" />
                            </span>
                            <Link to="#" className="func-edit" title="Edit">
                              <i className="ic ic-edit" />
                            </Link>
                            {users.email}
                          </span>
                        </li>
                        {/* <li>
                          <span className="label">Facebook</span>
                          <span className="ctn">
                            <Link to="#" className="func-edit">
                              <i className="ic ic-link" />
                            </Link>
                          </span>
                        </li> */}
                        <li>
                          <span className="label">Google</span>
                          <span className="ctn">
                            <span>
                              {users.name}
                              <span>
                                <Link to="#" className="func-edit">
                                  <i className="ic ic-remove" />
                                </Link>
                              </span>
                            </span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile__wrap">
                <div className="review__sect">
                  <div className="review-container" />
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <NotificationContainer />
    </>
  );
}

export default Profile;

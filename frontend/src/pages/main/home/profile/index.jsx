import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Load from "../../../../components/Load";
import { ModalSettingProfile } from "../../../../components/Modal/ModalSettingProfile";
import { getUser } from "../../../../store/actions/user.action";
import { OPEN_MODAL } from "../../../../store/constants/modal.const";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getUser(id));
    },
    // eslint-disable-next-line
    [id]
  );
  const onUpdateProfile = () => {
    dispatch({
      type: OPEN_MODAL,
      payload: <ModalSettingProfile />,
    });
  };
  const { loading } = useSelector((state) => state.common);
  const { users } = useSelector((state) => state.user);
  return (
    <>
      {loading || !users ? (
        <>
          <Load />
        </>
      ) : (
        <>
          <section className="body">
            <div
              className="cover-profile new-profile"
              style={{
                backgroundImage: `url("https://source.unsplash.com/random/?car, automobile,${users.id}")`,
              }}
            />
            <div className="profile__sect">
              <div className="content-profile--new">
                <div className="desc-profile desc-account">
                  <div className="avatar-box">
                    <div className="avatar avatar--xl has-edit">
                      <div
                        className="avatar-img"
                        style={{
                          backgroundImage: `url("https://source.unsplash.com/random/?car, automobile,${users.username}")`,
                        }}
                      />
                    </div>
                  </div>
                  <div className="snippet">
                    <div className="profile-info">
                      <div className="item-content">
                        <div className="item-title">
                          <p>{users.username}</p>
                          <Link
                            to="#"
                            className="func-edit"
                            title="Chỉnh sửa"
                            onClick={() => onUpdateProfile()}
                          >
                            <i className="ic ic-edit" />
                          </Link>
                        </div>
                        <div className="d-flex">
                          <span className="join">Tham gia: 21/09/2022</span>
                          <div className="bar-line" />
                          <span className="sum-trips">Chưa có chuyến</span>
                        </div>
                      </div>
                      <div className="item-points">
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
                      </div>
                    </div>
                    <div className="line-info">
                      <div className="d-flex">
                        <div className="info">
                          <span className="label">Ngày sinh </span>
                          <span className="ctn" />
                        </div>
                        <div className="info">
                          <span className="label">Giới tính </span>
                          <span className="ctn">Nam</span>
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
                            {users.username}
                          </span>
                        </li>
                        <li>
                          <span className="label">GPLX</span>
                          <span className="ctn">
                            <span>
                              <i className="ic ic-error" />
                            </span>
                            <Link
                              to="#"
                              className="verify btn btn--s prevent-click"
                            >
                              Chưa xác thực GPLX
                            </Link>
                            <Link to="#" className="func-edit" title="Edit">
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
                        <li>
                          <span className="label">Facebook</span>
                          <span className="ctn">
                            <Link to="#" className="func-edit">
                              <i className="ic ic-link" />
                            </Link>
                          </span>
                        </li>
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
    </>
  );
}

export default Profile;

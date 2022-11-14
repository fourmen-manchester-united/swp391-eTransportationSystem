import React from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import Load from "../../../components/Load";
import Validate from "../../../components/validateInput";
import { validateRegister } from "../../../components/validateInput/validateInput";
import useForm from "../../../hooks/useForm";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { postRegister } from "../../../store/actions/user.action";
import LoginGoogle from "../login/loginGoogle";

function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useIsLogin();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateRegister
  );
  function login() {
    dispatch(
      postRegister(values.username, values.name, values.password, history)
    );
  }
  return (
    <div>
      <section className="body">
        <div className="body-container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-default form-s">
              <h2 className="title-form">Đăng kí tài khoản</h2>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-phone-fill" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Điện thoại hoặc email"
                    onChange={handleChange}
                    value={values.username || ""}
                    required
                  />
                  <Validate errors={errors.username} />
                </div>
              </div>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-user-fill" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Tên hiển thị"
                    onChange={handleChange}
                    value={values.name || ""}
                    required
                  />
                  <Validate errors={errors.name} />
                </div>
              </div>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-lock-fill" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <Validate errors={errors.password} />
                </div>
              </div>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-lock-fill" />
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Xác nhận mật khẩu"
                    onChange={handleChange}
                    value={values.confirmPassword || ""}
                    required
                  />
                  <Validate errors={errors.confirmPassword} />
                </div>
              </div>
              <div className="line-form">
                <div className="clear" />
                {loading ? (
                  <button
                    className="btn btn-primary btn--m"
                    disabled
                    style={{
                      opacity: ".4",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Đăng Kí
                    <Load isSmall={true} />
                  </button>
                ) : (
                  <button className="btn btn-primary btn--m">Đăng Kí</button>
                )}
                <div className="space" />
                <span className="line" />
                <p className="textAlign-center">
                  Hoặc đăng nhập bằng ?<Link to="/login">Tài Khoản!</Link>
                </p>
                <div className="wr-btn-share">
                  {/* <div className="wr-btn">
                    <Link
                      to="#"
                      className="btn btn-facebook btn--m"
                      type="button"
                    >
                      <i className="ic ic-facebook" /> Facebook
                    </Link>
                  </div> */}
                  <LoginGoogle />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <NotificationContainer />
    </div>
  );
}

export default Register;

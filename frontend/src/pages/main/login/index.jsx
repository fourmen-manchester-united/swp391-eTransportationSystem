import React from "react";
import { NotificationContainer } from "react-notifications";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Load from "../../../components/Load";
import Validate from "../../../components/validateInput";
import { validateLogin } from "../../../components/validateInput/validateInput";
import useForm from "../../../hooks/useForm";
import { useIsLogin } from "../../../hooks/useIsLogin";
import { postLogin } from "../../../store/actions/user.action";
import LoginGoogle from "./loginGoogle";

function Login() {
  const dispatch = useDispatch();
  let history = useHistory();
  const { loading } = useIsLogin();
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateLogin
  );
  function login() {
    dispatch(postLogin(values.username, values.password, history));
  }
  return (
    <div>
      <section className="body">
        <div className="body-container">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-default form-s">
              <h2 className="title-form">Đăng nhập</h2>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-phone-fill" />
                  <input
                    type="text"
                    name="username"
                    placeholder="Tên Đăng Nhập"
                    onChange={handleChange}
                    value={values.username || ""}
                    required
                  />
                  <Validate errors={errors.username} />
                </div>
              </div>
              <div className="line-form">
                <div className="wrap-input has-ico">
                  <i className="ic ic-lock-fill" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Mật Khẩu"
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                  />
                  <Validate errors={errors.password} />
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
                    Đăng nhập
                    <Load isSmall={true} />
                  </button>
                ) : (
                  <button className="btn btn-primary btn--m">Đăng nhập</button>
                )}
                <div className="space" />
                <span className="line" />
                <p className="textAlign-center">
                  Bạn chưa là thành viên?
                  <Link to="/register">Hãy đăng kí ngay!</Link>
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

export default Login;

import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import { actLogout } from "../../store/actions/user.action";

function Header() {
  const { user } = useIsLogin();
  const dispatch = useDispatch();
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }
  return (
    <section className="header">
      <div className="header-container">
        <div className="header-icon">
          <div className="js-toggle-right-slidebar js-menu-mobile">
            <div className="trigger-menu">
              <span className="three-bars-icon" />
            </div>
          </div>
          <div>
            <div />
          </div>
          <Link className="item-app show-on-med-and-down" to="/owner" />
        </div>
        <div className="logo-container">
          <Link to="/">ioto</Link>
        </div>
        <div className="menu-container">
          <ul>
            <li className="has-magr">
              <a href="/owner/register" className="become-owner">
                Trở thành chủ xe
              </a>
            </li>
            {user ? (
              <li className="dropdown ">
                <div
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar avatar--s">
                    <div
                      className="avatar-img"
                      style={{
                        backgroundImage: `url("https://source.unsplash.com/random/?wallpaper,landscape,${user.username}")`,
                      }}
                    />
                  </div>
                  <div className="snippet" style={{ display: "flex" }}>
                    <div className="item-title">
                      <span>{user.username}</span>
                    </div>
                    <Link to="/" onClick={handleLogout}>
                      <span>Log out</span>
                    </Link>
                  </div>
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ minWidth: "10vw" }}
                >
                  <ul>
                    <li>
                      <a href="/account">Tài khoản</a>
                    </li>
                    <li>
                      <a href="/myfavs">Xe yêu thích</a>
                    </li>
                    <li>
                      <a href="/mycars">Xe của tôi </a>
                    </li>
                    <li>
                      <a>
                        <span className>Chuyến của tôi</span>
                      </a>
                    </li>
                    <li>
                      <a href="/myaddress">Địa chỉ của tôi</a>
                    </li>
                    <li>
                      <a href="/mycard">Thẻ của tôi </a>
                    </li>
                    <li>
                      <a>
                        <span className>Khuyến mãi</span>
                      </a>
                    </li>
                    <li>
                      <a href="/sharedcode">Giới thiệu bạn bè</a>
                    </li>
                    <li>
                      <a href="/myreward">Quà tặng</a>
                    </li>
                    <li>
                      <a>Đổi mật khẩu</a>
                    </li>
                    <li>
                      <a>Đăng xuất</a>
                    </li>
                  </ul>
                </div>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login">Đăng nhập</Link>
                </li>
                <li>
                  <Link
                    className="btn btn-transparent btn--m"
                    title
                    to="/register"
                  >
                    Đăng kí
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div />
        </div>
      </div>
      <div className="left-decoration">
        <img src="assets/fonts/left.c988b015.svg" alt="" />
      </div>
      <div className="right-decoration">
        <img src="assets/fonts/right.0b1bf774.svg" alt="" />
      </div>
    </section>
  );
}

export default Header;
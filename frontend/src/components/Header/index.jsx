import React from "react";
import { Link } from "react-router-dom";

function Header() {
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
            <li>
              <Link to="/login">Đăng nhập</Link>
            </li>
            <li>
              <Link className="btn btn-transparent btn--m" title to="/register">
                Đăng kí
              </Link>
            </li>
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

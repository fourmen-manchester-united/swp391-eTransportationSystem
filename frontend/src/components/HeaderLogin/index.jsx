import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function HeaderLogin() {
  return (
    <section className="header">
      <Navbar>
        {/* <li className="has-magr">
          <Link to="/carRegisterMode" className="become-owner">
            Trở thành chủ xe
          </Link>
        </li> */}
        <li>
          <Link to="/login" style={{ lineHeight: " 60px", color: " #f8f9fb" }}>
            Đăng nhập
          </Link>
        </li>
        <li>
          <Link className="btn btn-transparent btn--m" title to="/register">
            Đăng kí
          </Link>
        </li>
      </Navbar>
    </section>
  );
}

export default HeaderLogin;

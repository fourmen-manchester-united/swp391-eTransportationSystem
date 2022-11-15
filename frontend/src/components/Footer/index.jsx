import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="t-footer">
          <div className="col-1">
            <Link className="logo-footer" to="/">
              oto
            </Link>
            <Link className="func-social-svg" to="/" />
          </div>
          <Link className="func-social-svg" to="/"></Link>
          <div className="col-2">
            <div className="f-part">
              <h5>Chính sách</h5>
              <ul>
                <li>
                  <Link to="/">Giới thiệu về oto</Link>
                </li>
                <li>
                  <Link to="/">Chính sách và quy định</Link>
                </li>
                <li>
                  <Link to="/">Quy chế hoạt động</Link>
                </li>
                <li>
                  <Link to="/">Bảo mật thông tin</Link>
                </li>
                <li>
                  <Link to="/">Giải quyết tranh chấp</Link>
                </li>
              </ul>
            </div>
            <div className="f-part">
              <h5>Tìm hiểu thêm</h5>
              <ul>
                <li>
                  <Link to="/">Hướng dẫn chung</Link>
                </li>
                <li>
                  <Link to="/">Hướng dẫn đặt xe</Link>
                </li>
                <li>
                  <Link to="/">Hướng dẫn dành cho chủ xe</Link>
                </li>
                <li>
                  <Link to="/">Hướng dẫn thanh toán</Link>
                </li>
                <li>
                  <Link to="/">Hỏi và trả lời</Link>
                </li>
                <li>
                  <Link to="/">oto blog</Link>
                </li>
              </ul>
            </div>
            <div className="f-part">
              <h5>Đối tác</h5>
              <ul>
                <li>
                  <Link to="/">Đăng ký chủ xe oto</Link>
                </li>
                <li>
                  <Link to="/">Đăng ký GPS MITRACK 4G</Link>
                </li>
                <li>
                  <a href="/">
                    Đăng ký Bảo hiểm vật chất &amp; Bảo hiểm TNDS xe ô tô
                  </a>
                </li>
              </ul>
            </div>
            <div className="clear" />
          </div>
        </div>
        <div className="module-payment">
          <div className="payment-wrapper">
            <div className="left">
              <h4 className="title">CÁCH THỨC THANH TOÁN</h4>
              <div className="logo-payment">
                <div className="payment-wrap">
                  <div className="fix-img">
                    <img
                      src="https://giaidapviet.com/wp-content/uploads/2021/05/paypal-logo-2015_grande.png"
                      alt="Mioto - Thuê xe tự lái"
                    />
                  </div>
                </div>
                {/* <div className="payment-wrap">
                  <div className="fix-img">
                    <img
                      src="assets/fonts/vnpay.cbe63a22.svg"
                      alt="Mioto - Thuê xe tự lái"
                    />
                  </div>
                </div> */}
              </div>
            </div>
            <div className="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

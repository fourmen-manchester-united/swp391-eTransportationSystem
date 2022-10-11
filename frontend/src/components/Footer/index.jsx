import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="t-footer">
          <div className="col-1">
            <Link className="logo-footer" href="/">
              oto
            </Link>
            <Link
              className="func-social-svg"
              href="https://www.facebook.com/mioto.vn/"
            />
          </div>
          <Link className="func-social-svg" to="/"></Link>
          <div className="col-2">
            <Link className="func-social-svg" to="/"></Link>
            <div className="f-part">
              <Link className="func-social-svg" to="/">
                <h5>Chính sách</h5>
              </Link>
              <ul>
                <Link className="func-social-svg" to="/"></Link>
                <li>
                  <Link className="func-social-svg" to="/" />
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
              </ul>
            </div>
            <div className="f-part">
              <h5>Tìm hiểu thêm</h5>
              <ul>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
              </ul>
            </div>
            <div className="f-part">
              <h5>Đối tác</h5>
              <ul>
                <li>
                  <Link to="/register">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
                </li>
                <li>
                  <Link to="/">string</Link>
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
                      src="assets/images/momo.3e212754.png"
                      alt="Mioto - Thuê xe tự lái"
                    />
                  </div>
                </div>
                <div className="payment-wrap">
                  <div className="fix-img">
                    <img
                      src="assets/fonts/vnpay.cbe63a22.svg"
                      alt="Mioto - Thuê xe tự lái"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <h4 className="title">CHỨNG NHẬN</h4>
              <div className="certify-logo">
                <div className="fix-img">
                  <a
                    href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=41067"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="assets/images/bo-cong-thuong.03f9e797.png"
                      alt="Mioto - Thuê xe tự lái"
                    />
                  </a>
                </div>
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

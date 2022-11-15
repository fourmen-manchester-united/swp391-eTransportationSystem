import React from "react";
import { Link } from "react-router-dom";

function Owner() {
  return (
    <div
      className="owner__sect"
      style={{ backgroundImage: 'url("assets/images/bg-main-2.c3672bdc.jpg")' }}
    >
      <div className="ex-container">
        <div className="inner__wrap">
          <h2>Bạn muốn cho thuê xe</h2>
          <p>
            Hãy đăng kí trở thanh đối tác của chúng tôi ngay để có cơ hội kiếm
            thêm thu nhập hằng tháng.
          </p>
          <div className="has-2btn">
            <Link to="/howItWork" className="btn btn-secondary btn--m">
              Tìm hiểu ngay
            </Link>
            <Link to="#" className="btn btn-primary btn--m">
              Đăng ký xe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;

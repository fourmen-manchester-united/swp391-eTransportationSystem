import React from "react";
import { Link } from "react-router-dom";

function CarRegister() {
  return (
    <div className="module-settings min-height-register module-trips">
      <div className="trip-container">
        <div className="register-mode">
          <img
            className="img-fluid"
            src="assets/images/register-car.877c9255.png"
            alt=""
          />
          <div className="wrap-2-btn">
            <Link href="/selfDrive" className="btn btn--m btn-primary">
              Đăng ký xe tự lái
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarRegister;

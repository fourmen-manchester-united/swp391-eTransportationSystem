import React from "react";
import { Link } from "react-router-dom";

function Tutorial() {
  return (
    <div className="tutorial__sect">
      <div className="m-container">
        <h3 className="n-title">Hướng dẫn thuê xe</h3>
        <Link to="/howItWork">
          <div className="step-box__wrap">
            <div className="step-box__item">
              <div className="step-img">
                <div className="fix-img">
                  <img
                    src="assets/fonts/step-1.c204d3e1.svg"
                    alt="oto - Thuê xe tự lái"
                  />
                </div>
              </div>
              <div className="step-detail">
                <h3>Đặt xe với oto</h3>
              </div>
            </div>
            <div className="step-box__item">
              <div className="step-img">
                <div className="fix-img">
                  <img
                    src="assets/fonts/step-2.0bcadc00.svg"
                    alt="oto - Thuê xe tự lái"
                  />
                </div>
              </div>
              <div className="step-detail">
                <h3>Nhận xe hoặc giao tận nơi</h3>
              </div>
            </div>
            <div className="step-box__item">
              <div className="step-img">
                <div className="fix-img">
                  <img
                    src="assets/fonts/step-3.5ee48572.svg"
                    alt="oto - Thuê xe tự lái"
                  />
                </div>
              </div>
              <div className="step-detail">
                <h3>Trải nghiệm chuyến đi</h3>
              </div>
            </div>
            <div className="step-box__item">
              <div className="step-img">
                <div className="fix-img">
                  <img
                    src="assets/fonts/step-4.518ab6a3.svg"
                    alt="oto - Thuê xe tự lái"
                  />
                </div>
              </div>
              <div className="step-detail">
                <h3>Kết thúc giao dịch</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Tutorial;

import React from "react";
import { useEffect } from "react";

function HowItWork() {
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    // eslint-disable-next-line
    []
  );
  return (
    <section className="body">
      <div className="section-tutorial__title">
        <div className="main_title d-flex">
          <h3 className="title">HƯỚNG DẪN</h3>
        </div>
        <div className="tutorial_tabs d-flex">
          <a href="#traveler" className="active">
            Khách Thuê
          </a>
          <a href="#owner" className="deactive">
            Chủ Xe
          </a>
        </div>
      </div>
      <div className="section-tutorial__detail" id="traveler">
        <div className="wrap-tutorial">
          <div className="step">
            <div className="left">
              <div className="tutorial-img">
                <div className="ict-large ict-login" />
              </div>
            </div>
            <div className="line-dot bg-gradient-green" />
            <div className="right">
              <div className="tutorial-content">
                <div className="title-tt">Đăng Nhập </div>
                <div className="desc">
                  <p>
                    Đăng nhập vào oto qua Facebook, Google, số điện thoại hoặc
                    email của bạn. Chúng tôi cần bạn xác thực số điện thoại
                    trước khi đặt xe.
                  </p>
                </div>
                <span className="number-step">1</span>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="left order-2">
              <div className="tutorial-content">
                <div className="title-tt">Tìm Xe</div>
                <div className="desc">
                  <p>
                    Bạn có thể tìm xe ưng ý nhanh chóng ở nơi bạn muốn tìm, thời
                    gian, hãng xe, đặt xe nhanh
                  </p>
                </div>
                <span className="number-step">2</span>
              </div>
            </div>
            <div className="line-dot" />
            <div className="right order-1">
              <div className="tutorial-img">
                <div className="ict-large ict-search" />
              </div>
            </div>
          </div>
          <div className="step">
            <div className="left">
              <div className="tutorial-img">
                <div className="ict ict-car"> </div>
              </div>
            </div>
            <div className="line-dot" />
            <div className="right">
              <div className="tutorial-content">
                <div className="title-tt">Đặt Xe </div>
                <div className="desc">
                  <p>
                    Lựa chọn chiếc xe mà bạn ưng ý và gửi Yêu cầu xe đến Chủ xe.
                    Sau đó chủ xe sẽ nhanh chóng phản hồi đến bạn trong thời
                    gian nhanh nhất.
                  </p>
                  <p>
                    Nếu bạn không muốn mất nhiều thời gian chờ đợi, có thể lựa
                    chọn chiếc xe khác có tính năng{"{"}" "{"}"}
                    <span className="rent">
                      <i className="ic ic-sm-thunderbolt-wh" /> Đặt xe nhanh
                    </span>
                    để đặt xe trực tiếp mà không cần thông qua sự phản hồi từ
                    phía Chủ xe
                  </p>
                </div>
                <span className="number-step">3</span>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="left order-2">
              <div className="tutorial-content">
                <div className="title-tt">Đặt Cọc </div>
                <div className="desc">
                  <p>
                    Sau khi nhận được sự đồng ý từ chủ xe, khách hàng có thể đặt
                    cọc bằng 3 hình thức chuyển khoản, ví điện tử hoặc tiền mặt.
                  </p>
                </div>
                <span className="number-step">4</span>
              </div>
            </div>
            <div className="line-dot" />
            <div className="right order-1">
              <div className="tutorial-img">
                <div className="ict-large ict-deposit" />
              </div>
            </div>
          </div>
          <div className="step">
            <div className="left">
              <div className="tutorial-img">
                <div className="ict-large ict-pickup" />
              </div>
            </div>
            <div className="line-dot" />
            <div className="right">
              <div className="tutorial-content">
                <div className="title-tt">Nhận xe</div>
                <div className="desc">
                  <p>
                    Bạn và chủ xe liên hệ gặp nhau để nhận xe. Ở oto, có nhiều
                    chủ xe sẵn sàng đem xe đến tận nơi cho bạn.
                  </p>
                  <p>
                    Kiểm tra tình trạng và giấy tờ xe, xuất trình bản gốc các
                    giấy tờ, kí xác nhận biên bản giao xe, nhận chìa khóa và bắt
                    đầu hành trình của bạn
                  </p>
                </div>
                <span className="number-step">5</span>
              </div>
            </div>
          </div>
          <div className="step">
            <div className="left order-2">
              <div className="tutorial-content">
                <div className="title-tt">Trả xe </div>
                <div className="desc">
                  <p>
                    Sau khi hết thời gian thuê, bạn hoàn trả xe giống như tình
                    trạng và thỏa thuận ban đầu. Kí xác nhận biên bản bàn giao,
                    nhận lại giấy tờ để hoàn thành chuyến đi tuyệt vời của bạn.
                  </p>
                  <p>
                    Đừng quên cho điểm rating và nhận xét của bạn đến chủ xe để
                    nâng cao chất lượng phục vụ cho những hành trình sắp tới
                    nhé!
                  </p>
                </div>
                <span className="number-step">6</span>
              </div>
            </div>
            <div className="line-dot bg-gradient-green-reverse" />
            <div className="right order-1">
              <div className="tutorial-img">
                <div className="ict-large ict-return" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;

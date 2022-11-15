import axios from "axios";
import React, { useEffect, useState } from "react";
import { useIsLogin } from "../../hooks/useIsLogin";

function VouCher() {
  const { loading } = useIsLogin();
  const [voucherList, setVoucherList] = useState(null);
  const [loadingInfo, setLoadingInfo] = useState(false);
  console.log("🚀~ loadingInfo", loadingInfo);
  const [text, setText] = useState("");
  useEffect(() => {
    const getAccountInfo = async () => {
      setLoadingInfo(true);
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/voucher?code=${text.trim()}`,
      })
        .then((res) => {
          setVoucherList(res.data);
          // setTotalPages(res.data.totalPage);
          setLoadingInfo(false);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [text, loading]);
  return (
    <section
      className="body min-height"
      style={{
        paddingTop: "60px",
      }}
    >
      <div className="section_promo-title">
        <div className="m-container">
          <h4>Khuyến mãi của tôi</h4>
          <div className="form-default">
            <div className="line-form">
              <div className="wrap-input has-ico-search">
                <div>
                  <input
                    type="text"
                    value={text}
                    style={{ textTransform: "uppercase" }}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập mã khuyến mãi..."
                  />
                </div>
                <i className="ic ic-search" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="module-promo m-container d-flex">
        {voucherList !== null && voucherList.length > 0
          ? voucherList.map((voucher, index) => (
              <div className="box-promo d-flex" key={index}>
                <div className="top">
                  <img
                    className="img-promo"
                    src="https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg"
                    alt="Mioto - Thuê xe tự lái"
                  />
                </div>
                <div className="center">
                  <p className="code">{voucher.code}</p>
                  <p className="desc">
                    Giảm<span> {voucher.percentage}%</span>
                  </p>
                  <p className="desc">
                    (tối đa<span> {voucher.maxDiscount}K</span>)
                  </p>
                </div>
              </div>
            ))
          : "Không tìm thấy mã khuyến mãi"}
      </div>
    </section>
  );
}

export default VouCher;

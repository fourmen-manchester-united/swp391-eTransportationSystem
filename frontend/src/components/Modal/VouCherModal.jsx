import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { useIsLogin } from "../../hooks/useIsLogin";
import { CLOSE_MODAL } from "../../store/constants/modal.const";
// import Load from "../Load";

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  border-top: 1px solid #343a40;
`;

export const ConfirmButton = styled.div`
  margin: 10px;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: #3bc9db;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background-color: #1098ad;
  }
`;
export const CloseButton = styled.div`
  margin: 10px;
  color: #fff;
  height: 40px;
  border-radius: 5px;
  padding: 5px;
  text-align: center;
  width: 200px;
  cursor: pointer;
  background-color: #e03131;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s;

  &:hover {
    background-color: #c92a2a;
  }
`;

const VouCherModal = ({ setVoucher }) => {
  //   const { loading } = useIsLogin();
  const dispatch = useDispatch();
  const [voucherList, setVoucherList] = useState(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const getAccountInfo = async () => {
      axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/voucher?code=${text.trim()}`,
      })
        .then((res) => {
          setVoucherList(res.data);
          // setTotalPages(res.data.totalPage);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, [text]);
  const onReview = (voucher) => {
    setVoucher({
      id: voucher.id,
      code: voucher.code,
      percentage: voucher.percentage,
      maxDiscount: voucher.maxDiscount,
    });
    closeModal();
  };
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  return (
    <div>
      <div className="modal-content" role="document">
        <div className="modal-header" style={{ paddingTop: "10px" }}>
          <h4 className="modal-title">Sử dụng mã khuyến mãi</h4>
        </div>
        <div className="modal-body">
          <div className="form-default">
            <div className="line-form">
              <div className="wrap-input has-ico-search">
                {" "}
                <i className="ic ic-search" />
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Nhập mã khuyến mãi"
                  style={{ textTransform: "uppercase" }}
                />
              </div>
            </div>
          </div>
          <div className="body-promo">
            {voucherList !== null && voucherList.length > 0
              ? voucherList.map((voucher, index) => (
                  <div key={index}>
                    <div className="box-promo">
                      <div className="left">
                        <img
                          className="img-promo"
                          src="https://n1-cstg.mioto.vn/g/2018/03/17/16/52.jpg"
                          alt="Mioto - Thuê xe tự lái"
                        />
                      </div>
                      <div className="center">
                        <p className="code">{voucher.code}</p>
                        <p className="desc">
                          Giảm <span>{voucher.percentage}%. </span>(tối đa
                          <span> {voucher.maxDiscount}K</span>)
                        </p>
                        <Link to="#" className="link-desc chevron-up">
                          Chi tiết
                        </Link>
                      </div>
                      <div className="right">
                        <Link
                          to="#"
                          onClick={() => onReview(voucher)}
                          className="btn btn--m btn-primary btn-sm"
                        >
                          Áp dụng
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              : "không có mã khuyến mãi"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VouCherModal;

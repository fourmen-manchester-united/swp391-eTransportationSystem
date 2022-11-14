import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Load from "../../../../components/Load";
import { useIsLogin } from "../../../../hooks/useIsLogin";
import { getListCarLikeByUser } from "../../../../store/actions/user.action";
import CardCarLike from "./cardCarLike";
import { NotificationContainer } from "react-notifications";
import { Link } from "react-router-dom";
import Pagination from "../../../admin/userManagement/pagination";

function CarLike() {
  const dispatch = useDispatch();
  const { isLogin } = useIsLogin();
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [handleGrant, setHandleGrant] = useState(null);
  useEffect(
    () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      dispatch(getListCarLikeByUser(isLogin.id, setList, page, setTotalPages));
    },
    // eslint-disable-next-line
    [handleGrant, page]
  );
  return (
    <div
      style={{
        paddingTop: "60px",
      }}
    >
      <div className="finding-control form-default shadow">
        <div className="wrapper-find wrapper-new-trips">
          <div className="tab-trips">
            <ul>
              <li>
                <Link to="#" className="active">
                  Xe thấy thích
                </Link>
              </li>
              {/* <li>
                <Link to="#" className="deactive">
                  Xe thấy ghét
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          margin: "0 auto",
          width: "100%",
          backgroundColor: "#e8eaef",
          maxWidth: "1265px",
          padding: "0 15px",
          overflow: "hidden",
        }}
      >
        <div
          className="module-map module-car min-height-no-footer"
          style={{ textAlign: "center" }}
        >
          {list ? (
            <div className="listing-car">
              {list.length > 0 ? (
                <>
                  {list.map((car, index) => (
                    <CardCarLike
                      car={car}
                      setHandleGrant={setHandleGrant}
                      key={index}
                    />
                  ))}
                </>
              ) : (
                <div
                  className="min-height-no-footer"
                  style={{ textAlign: "center", padding: "30vh 10vh" }}
                >
                  <p className="no-result">Không tìm thấy xe nào.</p>
                </div>
              )}
            </div>
          ) : (
            <Load />
          )}
          <div
            className="has-2btn"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination value={page} range={totalPages} onChange={setPage} />
          </div>
        </div>
        <NotificationContainer />
      </div>
    </div>
  );
}

export default CarLike;

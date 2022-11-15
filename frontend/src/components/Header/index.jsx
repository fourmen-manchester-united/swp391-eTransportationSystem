import React from "react";
import { Link } from "react-router-dom";
import { useIsLogin } from "../../hooks/useIsLogin";
import DropdownMenu from "../Dropdown/DropdownMenu";
import Navbar from "../Navbar/Navbar";
import NavItem from "../NavIteam";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "../../store/actions/user.action";

function Header() {
  const dispatch = useDispatch();
  const { user, isLoginToAdmin } = useIsLogin();
  useEffect(
    () => {
      dispatch(getUser(user.id));
    },
    // eslint-disable-next-line
    []
  );
  const { users } = useSelector((state) => state.user);
  return (
    <section className="header">
      <Navbar>
        {user && users !== null ? (
          <>
            <li className="has-magr">
              <Link to="/carRegisterMode" className="become-owner">
                Trở thành chủ xe
              </Link>
            </li>
            <li
              className="has-magr"
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <div className="avatar avatar--s">
                <div
                  className="avatar-img"
                  style={{
                    backgroundImage: `${
                      users.avatar === null
                        ? `url("https://source.unsplash.com/random/?car, automobile,${users.name}")`
                        : `url("${users.avatar}")`
                    }`,
                  }}
                />
              </div>
              <Link to={`/profile/${user.id}`} className="become-owner">
                {user.username}
              </Link>
            </li>
            <NavItem icon={<AiOutlineCaretDown />}>
              <DropdownMenu user={user} isLoginToAdmin={isLoginToAdmin} />
            </NavItem>
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                style={{ lineHeight: " 60px", color: " #f8f9fb" }}
              >
                Đăng nhập
              </Link>
            </li>
            <li>
              <Link className="btn btn-transparent btn--m" title to="/register">
                Đăng kí
              </Link>
            </li>
          </>
        )}
      </Navbar>
    </section>
  );
}

export default Header;

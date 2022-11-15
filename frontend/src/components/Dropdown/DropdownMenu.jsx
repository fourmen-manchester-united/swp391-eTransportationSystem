import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import {
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineViewGridAdd,
  HiOutlineTicket,
} from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";
import { useDispatch } from "react-redux";
import { actLogout } from "../../store/actions/user.action";
import { Link } from "react-router-dom";

const DropdownMenu = ({ user, isLoginToAdmin }) => {
  const dispatch = useDispatch();
  function handleLogout(e) {
    e.preventDefault();
    dispatch(actLogout());
  }

  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          {isLoginToAdmin === 2 && (
            <Link to="/dashboard" className="menu-item">
              <span className="icon-button">
                <HiOutlineShieldCheck />
              </span>
              <span> Dashboard</span>
            </Link>
          )}
          <Link to={`/profile/${user.id}`} className="menu-item">
            <span className="icon-button">
              <HiOutlineUserCircle />
            </span>
            <span> My Profile</span>
          </Link>
          <Link to={`/car-book`} className="menu-item">
            <span className="icon-button">
              <HiOutlineViewGridAdd />
            </span>
            <span> Xe đã đặt</span>
          </Link>
          <Link to={`/car-like`} className="menu-item">
            <span className="icon-button">
              <HiOutlineStar />
            </span>
            <span> Xe yêu thích</span>
          </Link>
          <Link to={`/voucher`} className="menu-item">
            <span className="icon-button">
              <HiOutlineTicket />
            </span>
            <span> Khuyến mãi</span>
          </Link>
          <Link to="/" onClick={handleLogout} className="menu-item">
            <span className="icon-button">
              <HiOutlineLogout />
            </span>
            <span>Log out</span>
          </Link>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "settings"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          />
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            JavaScript
          </DropdownItem>
          <DropdownItem leftIcon={<AiOutlineThunderbolt />}>
            Awesome!
          </DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;

import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import {
  HiOutlineCog,
  HiOutlineUserCircle,
  HiOutlineLogout,
  HiOutlineShieldCheck,
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
          {isLoginToAdmin === 1 && (
            <Link to="/admin" className="menu-item">
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
          <DropdownItem
            leftIcon={<HiOutlineCog />}
            goToMenu={"settings"}
            setActive={setActive}
          >
            Settings
          </DropdownItem>
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

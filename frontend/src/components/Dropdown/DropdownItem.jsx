import React from "react";
import { Link } from "react-router-dom";
import "./DropdownItem.css";

const DropdownItem = (props) => {
  return (
    <>
      <Link
        to="#"
        className="menu-item"
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </Link>
    </>
  );
};

export default DropdownItem;

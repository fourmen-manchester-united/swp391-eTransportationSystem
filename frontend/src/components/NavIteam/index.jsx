import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navItem.css";

const NavItem = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link to="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </Link>
      {open && props.children}
    </li>
  );
};

export default NavItem;

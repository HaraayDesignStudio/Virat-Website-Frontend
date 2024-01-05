import React from "react";
import { IoReturnUpBack } from "react-icons/io5";
import "./compenents.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-menu">
        <IoReturnUpBack className="navbar-icon-open" />
        <p>Menu</p>
      </div>
    </div>
  );
};

export default Navbar;

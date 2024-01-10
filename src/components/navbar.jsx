import React, { useState } from "react";
import { IoReturnUpBack, IoClose } from "react-icons/io5";
import "./compenents.css";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("drawer-overlay")) {
      handleCloseDrawer();
    }
  };

  return (
    <div className="navbar-container">
      <span className="navbar-menu" onClick={handleDrawerToggle}>
        <IoReturnUpBack
          className={`navbar-icon-open ${drawerOpen ? "rotate" : ""}`}
        />
        <p className={drawerOpen ? "hidden" : ""}>
          {!drawerOpen ? "Menu" : ""}
        </p>
        <p>{drawerOpen ? "Close" : ""}</p>
      </span>

      {drawerOpen && (
        <div
          className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
          onClick={handleOverlayClick}
        >
          <div className={`drawer-content ${drawerOpen ? "open" : "closed"}`}>
            <IoClose className="close-icon" onClick={handleCloseDrawer} />
            <p>Drawer Content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

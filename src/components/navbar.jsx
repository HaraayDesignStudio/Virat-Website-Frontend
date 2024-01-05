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
    // Close the drawer if clicked outside its content
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
        <p>Menu</p>
      </span>

      {drawerOpen && (
        <div className="drawer-overlay open" onClick={handleOverlayClick}>
          <div className="drawer-content open">
            <IoClose className="close-icon" onClick={handleCloseDrawer} />
            {/* Content of the Drawer */}
            <p>Drawer Content</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

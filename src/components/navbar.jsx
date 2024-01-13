import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import "./compenents.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const navigate = useNavigate();

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

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    handleCloseDrawer();
  };

  const navigationLink = () => {
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <span className="navbar-menu" >
        <div className="navbar-logo">
          <img
            src={logo}
            alt="logo"
            className="logo"
            onClick={navigationLink}
          />
        </div>
        <div onClick={handleDrawerToggle}>
          <IoReturnUpBack
            className={`navbar-icon-open ${drawerOpen ? "rotate" : ""}`}
          />
          <p className={drawerOpen ? "hidden" : ""}>
            {!drawerOpen ? "Menu" : ""}
          </p>
          <p>{drawerOpen ? "Close" : ""}</p>
        </div>
      </span>

      {drawerOpen && (
        <div
          className={`drawer-overlay ${drawerOpen ? "open" : ""}`}
          onClick={handleOverlayClick}
        >
          <div className={`drawer-content ${drawerOpen ? "open" : "closed"}`}>
            <Link
              to="/about"
              onClick={() => handleTabClick("about")}
              className={selectedTab === "about" ? "selected" : ""}
            >
              <div
                className={
                  selectedTab === "about"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              About
            </Link>
            <Link
              to="/services"
              onClick={() => handleTabClick("services")}
              className={selectedTab === "services" ? "selected" : ""}
            >
              <div
                className={
                  selectedTab === "services"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              Services
            </Link>
            <Link
              to="/download-brochure"
              onClick={() => handleTabClick("download-brochure")}
              className={selectedTab === "download-brochure" ? "selected" : ""}
            >
              <div
                className={
                  selectedTab === "download-brochure"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              Download Brochure
            </Link>
            <Link
              to="/contact"
              onClick={() => handleTabClick("contact")}
              className={selectedTab === "contact" ? "selected" : ""}
            >
              <div
                className={
                  selectedTab === "contact"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              Contact us
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React, { useState } from "react";
import { IoReturnUpBack } from "react-icons/io5";
import "./compenents.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import pdf from "../assets/virat brochure-1.pdf";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isService, setIsService] = useState(false);
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
    if (tab === "services") {
      setIsService(!isService);
      return;
    }
    if (tab === "download-brochure") {
      console.log("Download Brochure");
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "Virat_Brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    handleCloseDrawer();
  };

  const navigationLink = () => {
    navigate("/");
  };

  return (
    <div className="navbar-container">
      <span className="navbar-menu">
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
              <p>About</p>
            </Link>
            <Link
              // to="/services"
              onClick={() => handleTabClick("services")}
              className={`services-link ${
                selectedTab === "services" ? "selected" : ""
              }`}
            >
              <div
                className={
                  selectedTab === "services"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              <p>Services {isService ? "▲" : "▼"}</p>
            </Link>
            {isService && (
              <>
                <Link
                  to="/services/house-keeping"
                  onClick={() => handleTabClick("house-keeping")}
                  className={selectedTab === "house-keeping" ? "selected" : ""}
                >
                  <div
                    className={
                      selectedTab === "house-keeping"
                        ? "line-indication selected-line"
                        : "line-indication"
                    }
                  ></div>
                  <p>House Keeping</p>
                </Link>
                <Link
                  to="/services/horticulture-landscaping"
                  onClick={() => handleTabClick("horticulture-landscaping")}
                  className={
                    selectedTab === "horticulture-landscaping" ? "selected" : ""
                  }
                >
                  <div
                    className={
                      selectedTab === "horticulture-landscaping"
                        ? "line-indication selected-line"
                        : "line-indication"
                    }
                  ></div>
                  <p>Horticulture Landscaping</p>
                </Link>
                <Link
                  to="/services/mechanical"
                  onClick={() => handleTabClick("mechanical")}
                  className={selectedTab === "mechanical" ? "selected" : ""}
                >
                  <div
                    className={
                      selectedTab === "mechanical"
                        ? "line-indication selected-line"
                        : "line-indication"
                    }
                  ></div>
                  <p>Mechanical</p>
                </Link>
                <Link
                  to="/services/plumbing"
                  onClick={() => handleTabClick("plumbing")}
                  className={selectedTab === "plumbing" ? "selected" : ""}
                >
                  <div
                    className={
                      selectedTab === "plumbing"
                        ? "line-indication selected-line"
                        : "line-indication"
                    }
                  ></div>
                  <p>Plumbing</p>
                </Link>
                <Link
                  to="/services/eletrical"
                  onClick={() => handleTabClick("eletrical")}
                  className={selectedTab === "eletrical" ? "selected" : ""}
                >
                  <div
                    className={
                      selectedTab === "eletrical"
                        ? "line-indication selected-line"
                        : "line-indication"
                    }
                  ></div>
                  <p>Eletrical</p>
                </Link>
              </>
            )}
            <Link
              to="/human-sustainability"
              onClick={() => handleTabClick("human-sustainability")}
              className={
                selectedTab === "human-sustainability" ? "selected" : ""
              }
            >
              <div
                className={
                  selectedTab === "human-sustainability"
                    ? "line-indication selected-line"
                    : "line-indication"
                }
              ></div>
              <p>Human Sustainability</p>
            </Link>
            <Link
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
              <p>Download Brochure</p>
            </Link>
            <Link
              to="/contact-us"
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
              <p>Contact us</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

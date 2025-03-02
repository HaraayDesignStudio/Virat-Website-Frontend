import React, { useState } from "react";
import { IoReturnUpBack, IoCall, IoMail } from "react-icons/io5";
import "./compenents.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import pdf from "../assets/virat brochure-1.pdf";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isService, setIsService] = useState(false);
  const [isServes, setIsServes] = useState(false);
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
    if (tab === "serves") {
      setIsServes(!isServes);
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
        </div>{" "}
        <div className="navbarContactdetail">
          {" "}
          <IoCall className="navbar-icon"></IoCall>
          <h2> +91 9833535447</h2> <IoMail className="navbar-icon"></IoMail>
          <h2>vfm.services2017@gmail.com</h2>
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
            
          
              className={`services-link ${
                selectedTab === "services" ? "selected" : ""
              }`}
            >
              <div
                className={
                  selectedTab === "services"
                    ? "line-indication selected-line selectedtab"
                    : "line-indication"
                }
              ></div> <Link   to="/services">
              <p   onClick={handleCloseDrawer}>
                Services{" "} </p> </Link>
                {isService ? (
                  <svg   onClick={() => handleTabClick("services")}
                    className="svgg1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    {" "}
                    <path
                      fill="white"
                      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                    />
                  </svg>
                ) : (
                  <svg   onClick={() => handleTabClick("services")}
                    className="svgg1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                )}
              
            </Link>
            {isService && (
              <div className="servicestab">
                <div className="servicesubtab">
                  <Link
                    to="/services/house-keeping"
                    onClick={() => handleTabClick("house-keeping")}
                    className={
                      selectedTab === "house-keeping" ? "selectedtabb" : ""
                    }
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
                      selectedTab === "horticulture-landscaping"
                        ? "selectedtabb"
                        : ""
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
                    className={
                      selectedTab === "mechanical" ? "selectedtabb" : ""
                    }
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
                    className={selectedTab === "plumbing" ? "selectedtabb" : ""}
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
                    to="/services/electrical"
                    onClick={() => handleTabClick("eletrical")}
                    className={
                      selectedTab === "eletrical" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "eletrical"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Electrical</p>
                  </Link>{" "}
                </div>
              </div>
            )}
            {/* service ends  */}
            <Link
              // to="/services"
              onClick={() => handleTabClick("serves")}
              className={`services-link ${
                selectedTab === "serves" ? "selected" : ""
              }`}
            >
              <div
                className={
                  selectedTab === "serves"
                    ? "line-indication selected-line selectedtab"
                    : "line-indication"
                }
              ></div>
              <p>
                Industry We Serves{" "}
                {isServes ? (
                  <svg
                    className="svgg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="svgg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                )}
              </p>
            </Link>
            {isServes && (
              <div className="servicestab">
                <div className="servicesubtab">
                  <Link
                    to="/casestudy/housekeeping"
                    onClick={() => handleTabClick("HealthCare")}
                    className={
                      selectedTab === "HealthCare" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "house-keeping"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>HealthCare</p>
                  </Link>
                  <Link
                    to="/casestudy/electrical"
                    onClick={() => handleTabClick("Commercial")}
                    className={
                      selectedTab === "Commercial"
                        ? "selectedtabb"
                        : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "Commercial"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Commercial Complex</p>
                  </Link>
                  <Link
                    to="/casestudy/plumbing"
                    onClick={() => handleTabClick("Corporate")}
                    className={
                      selectedTab === "Corporate" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "Corporate"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p> Corporate Properties</p>
                  </Link>
                  <Link
                    to="/casestudy/mechanical"
                    onClick={() => handleTabClick("Residential")}
                    className={selectedTab === "Residential" ? "selectedtabb" : ""}
                  >
                    <div
                      className={
                        selectedTab === "Residential"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Residential Facility Management</p>
                  </Link>
                  <Link
                    to="/casestudy/horticulture-landscaping"
                    onClick={() => handleTabClick("Township")}
                    className={
                      selectedTab === "Township" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "Township"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Township Facility Management</p>
                  </Link>
                </div>
              </div>
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
            {/* ----------------------------------------------------------------------------------------- */}
            {/* <Link
              // to="/services"
              onClick={() => handleTabClick("serves")}
              className={`services-link ${
                selectedTab === "serves" ? "selected" : ""
              }`}
            >
              <div
                className={
                  selectedTab === "serves"
                    ? "line-indication selected-line selectedtab"
                    : "line-indication"
                }
              ></div>
              <p>
                Industry We Serves{" "}
                {isServes ? (
                  <svg
                    className="svgg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="white"
                      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
                    />
                  </svg>
                ) : (
                  <svg
                    className="svgg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#ffffff"
                      d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                    />
                  </svg>
                )}
              </p>
            </Link>
            {isServes && (
              <div className="servicestab">
                <div className="servicesubtab">
                  <Link
                    to="/casestudy/house-keeping"
                    onClick={() => handleTabClick("house-keeping")}
                    className={
                      selectedTab === "house-keeping" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "house-keeping"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>HealthCare</p>
                  </Link>
                  <Link
                    to="/casestudy/electrical"
                    onClick={() => handleTabClick("horticulture-landscaping")}
                    className={
                      selectedTab === "horticulture-landscaping"
                        ? "selectedtabb"
                        : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "horticulture-landscaping"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Commercial Complex</p>
                  </Link>
                  <Link
                    to="/casestudy/plumbing"
                    onClick={() => handleTabClick("mechanical")}
                    className={
                      selectedTab === "mechanical" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "mechanical"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p> Corporate Properties</p>
                  </Link>
                  <Link
                    to="/casestudy/mechanical"
                    onClick={() => handleTabClick("plumbing")}
                    className={selectedTab === "plumbing" ? "selectedtabb" : ""}
                  >
                    <div
                      className={
                        selectedTab === "plumbing"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Residential Facility Management</p>
                  </Link>
                  <Link
                    to="/casestudy/horticulture-landscaping"
                    onClick={() => handleTabClick("eletrical")}
                    className={
                      selectedTab === "eletrical" ? "selectedtabb" : ""
                    }
                  >
                    <div
                      className={
                        selectedTab === "eletrical"
                          ? "line-indication selected-line"
                          : "line-indication"
                      }
                    ></div>
                    <p>Township Facility Management</p>
                  </Link>
                </div>
              </div>
            )} */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

import React from "react";
import FooterBack from "../assets/footer.png";
import "./compenents.css";
import { FaArrowDownLong } from "react-icons/fa6";
import FooterCom from "./footerComponents";
import footermobile from "../assets/footer-mobile.png";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-router-dom";
import footerImage from "../assets/elastrations/Profesionalism.png";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper">
        <img src={FooterBack} alt="footer" className="footer-background" />
        <div className="footer-content">
          <div className="footer-left">
            <p className="footer-get-in-touch">Get in Touch</p>
            <p className="footer-disc">
            We believe in Growth & Success, and together we can create a place for all to Grow.
            </p>
            <div className="footer-download">
              <FaArrowDownLong className="footer-download-icon" />
              <span>Download brochure</span>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-box">
              <FooterCom name={"Email us"} link={""} img={footerImage} />
              <FooterCom name={"Visit us"} link={""} img={footerImage} />
            </div>
            <div className="footer-social">
              <p className="socialmedia-head">Socialmedia</p>
              <div className="socialmedia-icons">
                <p>
                  LinkedIn <FaLinkedin />
                </p>
                <p>
                  WhatsApp <IoLogoWhatsapp />
                </p>
              </div>
            </div>
          </div>
          <div className="logo-name-div">
            <p className="virat-logo-name">Virat</p>
            <Link className="haraay" to="https://haraaydesignstudio.com/">
              Made by HaraayDesignStudio
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-wrapper-mobile">
        <div className="footer-image-mobile">
          <img src={footermobile} alt="footerimage" />
          <p className="footer-mobile-heading">
            Where Expertise Convergence with Experience
          </p>
        </div>
        <div className="footer-mobile-content">
          <p className="footer-mobile-text">
          We believe in Growth & Success, and together we can create a place for all to Grow.
          </p>
          <div className="footer-download">
            <FaArrowDownLong className="footer-download-icon" />
            <span>Download brochure</span>
          </div>
          <div className="hr-div"></div>
          <p className="footer-mobile-getintouch">Get in touch</p>
          <p className="footer-mobile-email">[1] Email Us</p>
          <p className="footer-mobile-email">[2] Visit Us</p>
          <div className="hr-div"></div>
          <p className="follow-us-on">Follow us on</p>
          <div className="links-mobile">
            <Link className="link-mobile" to="/"></Link>
            <Link className="link-mobile" to="/"></Link>
          </div>
          <Link className="haraay-mobile" to="https://haraaydesignstudio.com/">
            Made by HaraayDesignStudio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

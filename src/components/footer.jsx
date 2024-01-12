import React from "react";
import FooterBack from "../assets/footer.png";
import "./compenents.css";
import { FaArrowDownLong } from "react-icons/fa6";
import FooterCom from "./footerComponents";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <img src={FooterBack} alt="footer" className="footer-background" />
      <div className="footer-content">
        <div className="footer-left">
          <p className="footer-get-in-touch">Get in Touch</p>
          <p className="footer-disc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since{" "}
          </p>
          <div className="footer-download">
            <FaArrowDownLong className="footer-download-icon" />
            <span>Download brochure</span>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-box">
            <FooterCom name={"Email us"} link={""} />
            <FooterCom name={"Visit us"} link={""} />
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
        </div>
      </div>
    </div>
  );
};

export default Footer;

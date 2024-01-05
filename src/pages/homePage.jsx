import React from "react";
import homepageimage from "../assets/image 8.png";
import "./pages.css";
import { IoIosArrowRoundForward } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="image-container-homepage">
        <img src={homepageimage} alt="homepage" />
        <p className="homepage-image-text">
          Lorem Ipsum is simply dummy text of the <br /> printing and
          typesetting industry. <br />
          Lorem Ipsum has been the industry's standard <br /> dummy text ever
          since the 1500s
        </p>
      </div>
      <div className="homapage-headtext">
        <span className="homepage-headtext-p">
          Where Expertise Convergence with Experience
        </span>
        <div className="homepage-headtext-button">
          <span className="homepage-headtext-content">
            <p>Know more</p>
            <IoIosArrowRoundForward className="homepage-headtext-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

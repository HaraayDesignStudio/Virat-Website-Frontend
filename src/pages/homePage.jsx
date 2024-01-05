import React from "react";
import homepageimage from "../assets/image 8.png";
import "./pages.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="image-container-homepage">
        <img src={homepageimage} alt="homepage" />

        <img src={homepageimage} alt="homepage" />
      </div>
    </div>
  );
};

export default HomePage;

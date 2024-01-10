import React from "react";
import homepageimage from "../assets/image 8.png";
import aboutsection from "../assets/Rectangle 137.png";
import cub from "../assets/Cub.png";
import "./pages.css";
import ButtonComponents from "../components/buttonComponents";
import ButtonComponents2 from "../components/buttonComponents2";

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
        <ButtonComponents name={"About Us"} onClickFun={() => {}} />
      </div>
      <div className="about-us-section">
        <img
          src={aboutsection}
          className="about-background-img"
          alt="homepage"
        />
        <div className="about-section-content">
          <div className="about-heading">
            <img src={cub} className="about-heading-img" alt="homepage" />
            About us
          </div>
          <div className="about-content-part">
            <div className="about-content-heading">Learn About us.</div>
            <div className="about-content-text">
              <p>
                Team of highly skilled professionals possesses extensive
                knowledge and expertise in facility management across various
                industries. Whether you require maintenance and repairs,
                cleaning services, security solutions, or any other
                facility-related support, we have got you covered.
              </p>
              <ButtonComponents2 name={"Know more"} onClickFun={() => {}} />
            </div>
          </div>
        </div>
      </div>
      <div className="our-services-section">
        <div className="our-services-headings-part">
          <div className="service-heading">
            <img src={cub} className="about-heading-img" alt="homepage" />
            Our Services
          </div>
          <div className="out-service-content">
            <div className="service-content-heading">
              The Hero to your Rescue
            </div>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

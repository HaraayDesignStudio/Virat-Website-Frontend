import React from "react";
import img1 from "../assets/Rectangle 162.png";
import movimg1 from "../assets/about/14_HVAC-MEP_143280593 1.png";
import movimg2 from "../assets/about/picxy_DD228481 2.png";
import movimg3 from "../assets/about/team-1 1.png";

const Aboutus = () => {
  return (
    <div className="about-wrapper">
      <div className="about-container">
        <div className="about-vision">
          <p className="about-vision-heading">Vision</p>
          <p className="about-vision-disc">
            Our vision is to be a global company to integrate and bring in
            international standards into our entity along with integration of
            employees and top management.
          </p>
        </div>
        <div className="about-one-img">
          <img src={img1} alt="img1" />
        </div>
        <div className="about-mission">
          <p className="about-mission-heading">Mision</p>
          <p className="about-mission-disc">
            Our mission is to be the ultimate stop for facility management
            services.
          </p>
        </div>
      </div>
      <div className="about-story-container">
        <div className="about-story-content">
          <p className="story-heading">Our Story</p>
          <p className="story-disc">
            At Virat, we understand the importance of efficient facility
            management in ensuring the smooth operation and success of your
            business. With our comprehensive range of services, we are committed
            to providing you with top-notch solutions tailored to meet your
            specific needs.At Virat, we understand the importance of efficient
            facility management in ensuring the smooth operation and success of
            your business. With our comprehensive range of services, we are
            committed to providing you with top-notch solutions tailored to meet
            your specific needs.At Virat, we understand the importance of
            efficient facility management in ensuring the smooth operation and
            success of your business. With our comprehensive range of services,
            we are committed to providing you with top-notch solutions tailored
            to meet your specific needs.At Virat, we understand the importance
            of efficient facility management in ensuring the smooth operation
            and success of your business. With our comprehensive range of
            services, we are committed to providing you with top-notch solutions
            tailored to meet your specific needs.At Virat, we understand the
            importance of efficient facility management in ensuring the smooth
            operation and success of your business. With our comprehensive range
            of services, we are committed to providing you with top-notch
            solutions tailored to meet your specific needs.
          </p>
        </div>
        <div className="story-image-vertical-moving">
          <div className="image-move-heading">
            <p>Together is how we make it happen.</p>
          </div>
          <div className="moving-div">
            <div className="inner-content">
              <div className="inner-slider">
                <div className="one-image">
                  <img src={movimg1} alt="mov" />
                </div>
                <div className="two-image">
                  <img src={movimg2} alt="mov" />
                  <img src={movimg2} alt="mov" />
                </div>
                <div className="one-image">
                  <img src={movimg3} alt="mov" />
                </div>
                <div className="two-image">
                  <img src={movimg2} alt="mov" />
                  <img src={movimg2} alt="mov" />
                </div>
                <div className="one-image">
                  <img src={movimg1} alt="mov" />
                </div>
                <div className="two-image">
                  <img src={movimg2} alt="mov" />
                  <img src={movimg2} alt="mov" />
                </div>
                <div className="one-image">
                  <img src={movimg3} alt="mov" />
                </div>
                <div className="two-image">
                  <img src={movimg2} alt="mov" />
                  <img src={movimg2} alt="mov" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

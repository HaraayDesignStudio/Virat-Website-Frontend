import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/Rectangle 162.png";
import movimg1 from "../assets/about/14_HVAC-MEP_143280593 1.png";
import movimg2 from "../assets/about/picxy_DD228481 2.png";
import movimg3 from "../assets/about/team-1 1.png";
import HorizantalScroll from "../components/horizantalscoll";
import ValuesCard from "../components/valuesCard";
import card1 from "../assets/elastrations/Profesionalism.png";
import card2 from "../assets/elastrations/Profesionalism_02.png";
import card4 from "../assets/elastrations/Reliablity & Consistency.png";
import card5 from "../assets/elastrations/Customer Satisfaction.png";
import card6 from "../assets/elastrations/Customer Satisfaction_02.png";
import mainImage from "../assets/elastrations/Continuous Improvement.png";
import { useNavigate } from "react-router-dom";
import { BsArrowUp } from "react-icons/bs";

const Aboutus = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const [showFirstSet, setShowFirstSet] = useState(true);

  const handleCircularButtonClick = () => {
    setShowFirstSet((prevShowFirstSet) => !prevShowFirstSet);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  // eslint-disable-next-line
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-wrapper">
      <div className="about-section-animation">
        <div className="about-animation-image">
          <img src={mainImage} alt="mainimage" />
        </div>
        <div
          className={
            showFirstSet
              ? "about-animation-container"
              : "about-animation-container about-animation-container-ss"
          }
        >
          <div className={showFirstSet ? "visible" : "hidden"}>
            <p className="why-us">Why Us ?</p>
            <p className="why-us-disc">
              Virat Facility Management is one of the leading facility
              management companies in India, offering a wide range of services
              to various industries. We also aim to have a modern vision and add
              new components to the existing solutions in the market by
              collaborating with international machinery brands for complete
              customer satisfaction.
            </p>
          </div>
          <div>
            <p className={showFirstSet ? "why-us-two" : "why-us"}>
              Why do we stand out as the best ?
            </p>
            <p
              className={
                showFirstSet ? "why-us-disc why-us-disc2" : "why-us-disc2-two"
              }
            >
              Virat Facility Management is one of the leading facility
              management companies in India, offering a wide range of services
              to various industries. We also aim to have a modern vision and add
              new components to the existing solutions in the market by
              collaborating with international machinery brands for complete
              customer satisfaction.
            </p>
          </div>
          <div
            className="about-circular-button"
            onClick={handleCircularButtonClick}
          >
            <BsArrowUp />
          </div>
        </div>
      </div>

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
            specific needs.
            <br /> Our team of highly skilled professionals possesses extensive
            knowledge and expertise in facility management across various
            industries. Whether you require maintenance and repairs, cleaning
            services, security solutions, or any other facility-related support,
            we have got you covered.
            <br /> With a focus on delivering excellence, we prioritize quality
            in every aspect of our work. We utilize state-of-the-art technology
            and innovative strategies to optimize efficiency while minimizing
            costs. Our proactive approach allows us to identify potential issues
            before they become major problems.
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
                <div className="one-image">
                  <img src={movimg3} alt="mov" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="stroy-scroller-mobile">
          <HorizantalScroll />
        </div>
      </div>
      <div className="about-values-container">
        <div className="about-values-header">
          <p className="about-values-hading">Our Values</p>
          <p className="about-values-disc">
            Virat is based upon reliability , transparency and top-notch quality
            services for our clients.
          </p>
        </div>
        <div className="cards-value-container">
          <div className="values-card-one">
            <ValuesCard
              image={card1}
              name={"Quality service"}
              disc={
                "Providing high-quality cleaning and housekeeping services is paramount. This involves attention to detail, thoroughness, and consistency in maintaining cleanliness."
              }
            />
            <ValuesCard
              image={card2}
              name={"Customer Satisfaction"}
              disc={
                "Placing a strong emphasis on meeting and exceeding customer expectations. Understanding and fulfilling the unique needs of each client, ensuring their satisfaction with the services provided."
              }
            />
          </div>
          <div className="values-card-one values-card-two">
            <ValuesCard
              image={mainImage}
              name={"Professionalism"}
              disc={
                "Upholding professional standards in all aspects of the business, including staff conduct, communication, punctuality, and reliability."
              }
            />
            <ValuesCard
              image={card4}
              name={"Continuous Improvement"}
              disc={
                "Striving for ongoing improvement by seeking feedback from clients, evaluating processes, and implementing innovative approaches to enhance service quality."
              }
            />
          </div>
          <div className="values-card-one values-card-two">
            <ValuesCard
              image={card5}
              name={"Reliability & Consistency"}
              disc={
                "Being dependable and consistent in delivering services as promised, maintaining a reliable schedule, and ensuring consistent quality standards."
              }
            />
            <ValuesCard
              image={card6}
              name={"Training & Development"}
              disc={
                "Investing in staff training to ensure they are equipped with the necessary skills, knowledge, and techniques to perform their duties effectively and efficiently."
              }
            />
            <ValuesCard
              image={card5}
              name={"Health & Safety"}
              disc={
                "Prioritizing the health and safety of both clients and employees by adhering to safety protocols, using appropriate equipment, and following industry best practices."
              }
            />
          </div>
        </div>
        <div className="card-values-scroll-container">
          <div className="card-values-container-mobile" ref={containerRef}>
            <ValuesCard
              image={card1}
              name={"Quality service"}
              disc={
                "Providing high-quality cleaning and housekeeping services is paramount. This involves attention to detail, thoroughness, and consistency in maintaining cleanliness."
              }
            />
            <ValuesCard
              image={card2}
              name={"Customer Satisfaction"}
              disc={
                "Placing a strong emphasis on meeting and exceeding customer expectations. Understanding and fulfilling the unique needs of each client, ensuring their satisfaction with the services provided."
              }
            />
            <ValuesCard
              image={mainImage}
              name={"Professionalism"}
              disc={
                "Upholding professional standards in all aspects of the business, including staff conduct, communication, punctuality, and reliability."
              }
            />
            <ValuesCard
              image={card4}
              name={"Continuous Improvement"}
              disc={
                "Striving for ongoing improvement by seeking feedback from clients, evaluating processes, and implementing innovative approaches to enhance service quality."
              }
            />
            <ValuesCard
              image={card5}
              name={"Reliability & Consistency"}
              disc={
                "Being dependable and consistent in delivering services as promised, maintaining a reliable schedule, and ensuring consistent quality standards."
              }
            />
            <ValuesCard
              image={card6}
              name={"Training & Development"}
              disc={
                "Investing in staff training to ensure they are equipped with the necessary skills, knowledge, and techniques to perform their duties effectively and efficiently."
              }
            />
            <ValuesCard
              image={card5}
              name={"Health & Safety"}
              disc={
                "Prioritizing the health and safety of both clients and employees by adhering to safety protocols, using appropriate equipment, and following industry best practices."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

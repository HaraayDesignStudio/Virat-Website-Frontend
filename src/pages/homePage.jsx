import React from "react";
import homepageimage from "../assets/image 8.png";
import aboutsection from "../assets/Rectangle 137.png";
import testimonials from "../assets/126276-abstract-3d-orange-black-and-white-curved-lines-texture-background 1 (1).png";
import cub from "../assets/Cub.png";
import card1 from "../assets/Rectangle 134.png";
import card2 from "../assets/Rectangle 134 (1).png";
import card3 from "../assets/Rectangle 134 (2).png";
import test1 from "../assets/tesimonilas/Ellipse 26.png";
import "./pages.css";
import ButtonComponents2 from "../components/buttonComponents2";
import ServiceCard from "../components/serviceCard";
import ServiceBrandCarousel from "../components/serviceBrandCarousel";
import TestimonialsCard from "../components/testimonilaCard";
import ButtonCom from "../components/buttonCom";

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
        <ButtonCom name={"Explore now"} link={""} />
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
              <ButtonComponents2
                name={"Explore now"}
                onClickFun={() => {}}
                className="about-us-button"
              />
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
        <div className="services-cards">
          <ServiceCard
            image={card1}
            heading={"House Keeping"}
            disc={
              "where  we provide cleaning services to our clients with a combination of machinery and manpower"
            }
            func={() => {}}
          />
          <ServiceCard
            image={card2}
            heading={"Mechanical, Electrical and Plumbing"}
            disc={
              "services for maintenance of properties at a given point of time when deployed on site."
            }
            func={() => {}}
          />
          <ServiceCard
            image={card3}
            heading={"Horticulture and landscaping maintenance"}
            disc={
              "providing gardening services for companies, societies and realty developers looking to change their landscaping structure."
            }
            func={() => {}}
          />
        </div>
        <div className="service-brand-scroller">
          <div className="brand-scroller-head">
            <p>Service to Brands</p>
          </div>
          <div className="brand-line"></div>
          <ServiceBrandCarousel />
        </div>
      </div>
      <div className="testimonila-section">
        <img
          src={testimonials}
          className="about-background-img"
          alt="homepage"
        />
        <div className="testimonial-section-content">
          <div className="testimonila-heading">
            <img src={cub} className="about-heading-img" alt="homepage" />
            Our Testimonials
          </div>
          <div className="testimonila-trust-client">
            <p>
              Trust our
              <br /> Client’ words
            </p>
          </div>
          <div className="testimonial-card-one">
            <div className="testimonial-test">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </p>
            </div>
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
          </div>
          <div className="testimonial-card-one testimonial-card-two">
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
          </div>
          <div className="testimonial-mobile-view ">
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
            <TestimonialsCard
              image={test1}
              name={"Albert Flores"}
              role={"SME store owner"}
              disc={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import homepageimage from "../assets/image 8.png";
import aboutsection from "../assets/Rectangle 137.png";
import testimonials from "../assets/126276-abstract-3d-orange-black-and-white-curved-lines-texture-background 1 (1).png";
import cub from "../assets/Cub.png";
import card1 from "../assets/Rectangle 134.png";
import card2 from "../assets/Rectangle 134 (1).png";
import card3 from "../assets/Rectangle 134 (2).png";
import test1 from "../assets/brnads/356674 1.png";
import test3 from "../assets/brnads/hdfc-bank-logo-removebg-preview 1.png"
import test4 from "../assets/brnads/CBRE_Group_logo_(till_2021) 1.png"
import test5 from "../assets/brnads/oberoi-realty5010-removebg-preview 1.png"
import "./pages.css";
import ButtonComponents2 from "../components/buttonComponents2";
import ServiceCard from "../components/serviceCard";
import ServiceBrandCarousel from "../components/serviceBrandCarousel";
import TestimonialsCard from "../components/testimonilaCard";
import ButtonCom from "../components/buttonCom";
import ServiceBrandCarousel2 from "../components/serviceBrandCarousel2";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

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
    <div className="homepage-container">
      <div className="image-container-homepage">
        <img src={homepageimage} alt="homepage" />
        <p className="homepage-image-text">
          Virat was founded because of our passion for hygiene ,organizing and
          creating a healthy space for all, which we developed into a much
          larger scale that today is known as virat facility management.
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
                Our brand positioning is centered around providing Quality
                services for various other businesses. We are the professional
                helping hand for your business, we aim to provide you with
                services that simplify your work. With an approach that is well
                organized, well executed. We strive to encourage individuals to
                understand and embrace the sustainable side of living.
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
              We love being the helping hand you need, here are few services
              where we offer our expertise.
            </p>
          </div>
        </div>
        <div className="services-cards">
          <ServiceCard
            image={card1}
            heading={"House Keeping"}
            disc={
              "we offer our esteemed clients top-notch cleaning services that combine the power of advanced machinery with the expertise of skilled manpower. Our team of highly trained professionals is dedicated to providing detailed and professional housekeeping services that are customized to meet the unique needs of each client. We take great pride in maintaining the highest standards of cleanliness and hygiene, and we strive to ensure that every aspect of your facility is impeccably maintained. Our commitment to excellence and attention to detail make us the preferred choice for clients seeking exceptional cleaning solutions."
            }
            func={() => {}}
            id={1}
          />
          <ServiceCard
            image={card2}
            heading={"Mechanical, Electrical and Plumbing"}
            disc={
              "services for maintenance of properties at a given point of time when deployed on site."
            }
            func={() => {}}
            id={2}
          />
          <ServiceCard
            image={card3}
            heading={"Horticulture and landscaping maintenance"}
            disc={
              "providing gardening services for companies, societies and realty developers looking to change their landscaping structure."
            }
            func={() => {}}
            id={3}
          />
        </div>
        <div className="service-brand-scroller">
          <div className="brand-scroller-head">
            <p>Service to Brands</p>
          </div>
          <div className="brand-line"></div>
          <ServiceBrandCarousel />
          <div className="wrapper-two">
            <ServiceBrandCarousel2 />
          </div>
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
                Virat has been in facility management for a long time now, In
                this journey of us we have created some long lasting connections
                through our reliability , ability, and of course our services.
                Don’t believe us, hear it from our clients:
              </p>
            </div>
            <TestimonialsCard
              image={test1}
              disc={
                "Absolutely outstanding service! We've been partnered with Virat Facility Management Services for our facility management needs, and they have exceeded our expectations. The attention to detail in their housekeeping services is unparalleled. Our facility has never looked cleaner or more organized. Professionalism and efficiency are their hallmarks. Highly recommended"
              }
            />
            <TestimonialsCard
              image={test1}
              disc={
                "Their housekeeping services are not only thorough but also done with a smile. The team is reliable, and their dedication to maintaining a clean and welcoming environment is commendable. It's a pleasure working with them!"
              }
            />
          </div>
          <div className="testimonial-card-one testimonial-card-two">
            <TestimonialsCard
              image={test3}
              disc={
                "Exceptional service from Virat As a bank, maintaining a clean and secure environment is of utmost importance. We trust Virat for their outstanding facility management services. Their attention to detail, professionalism, and commitment to security protocols have surpassed our expectations. It's a pleasure working with a company that understands the unique needs of a financial institution"
              }
            />
            <TestimonialsCard
              image={test4}
              disc={
                " VFM has been an invaluable partner in maintaining our office spaces. Their housekeeping services are top-notch, and their facility management expertise is evident in the seamless operation of our facilities. We appreciate the personalized attention they provide, ensuring our unique needs are always met. Highly recommended for anyone seeking a reliable and professional service!"
              }
            />
            <TestimonialsCard
              image={test5}
              disc={
                "As a property manager, finding a reliable facility management company is crucial. Virat has consistently delivered exceptional service. The professionalism, punctuality, and attention to detail have made them our go-to choice. Our tenants have also noticed the positive change in the cleanliness and functionality of our properties"
              }
            />
          </div>
          <div className="testimonial-mobile-view ">
            <TestimonialsCard
              image={test1}
              disc={
                "Absolutely outstanding service! We've been partnered with Virat Facility Management Services for our facility management needs, and they have exceeded our expectations. The attention to detail in their housekeeping services is unparalleled. Our facility has never looked cleaner or more organized. Professionalism and efficiency are their hallmarks. Highly recommended"
              }
            />
            <TestimonialsCard
              image={test1}
              disc={
                "Their housekeeping services are not only thorough but also done with a smile. The team is reliable, and their dedication to maintaining a clean and welcoming environment is commendable. It's a pleasure working with them!"
              }
            />
            <TestimonialsCard
              image={test3}
              disc={
                "Exceptional service from Virat As a bank, maintaining a clean and secure environment is of utmost importance. We trust Virat for their outstanding facility management services. Their attention to detail, professionalism, and commitment to security protocols have surpassed our expectations. It's a pleasure working with a company that understands the unique needs of a financial institution"
              }
            />
            <TestimonialsCard
              image={test4}
              disc={
                " VFM has been an invaluable partner in maintaining our office spaces. Their housekeeping services are top-notch, and their facility management expertise is evident in the seamless operation of our facilities. We appreciate the personalized attention they provide, ensuring our unique needs are always met. Highly recommended for anyone seeking a reliable and professional service!"
              }
            />
            <TestimonialsCard
              image={test5}
              disc={
                "As a property manager, finding a reliable facility management company is crucial. Virat has consistently delivered exceptional service. The professionalism, punctuality, and attention to detail have made them our go-to choice. Our tenants have also noticed the positive change in the cleanliness and functionality of our properties"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

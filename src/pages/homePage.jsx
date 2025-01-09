import React, { useEffect, useState } from "react";
import homepageimage from "../assets/Hero Section.webp";
import aboutsection from "../assets/Rectangle 137.png";
import testimonials from "../assets/126276-abstract-3d-orange-black-and-white-curved-lines-texture-background 1 (1).png";
import cub from "../assets/Cub.png";
import whatsapp from "../assets/whatsapp.png";
// import styles from "./Services.module.css"
import test1 from "../assets/brnads/356674 1.png";
import test3 from "../assets/brnads/hdfc-bank-logo-removebg-preview 1.png";
import test4 from "../assets/brnads/CBRE_Group_logo_(till_2021) 1.png";
import test5 from "../assets/brnads/oberoi-realty5010-removebg-preview 1.png";
import "./pages.css";
import ButtonComponents2 from "../components/buttonComponents2";
// import ServiceCard from "../components/serviceCard";
import ServiceBrandCarousel from "../components/serviceBrandCarousel";
import ServiceBrandCarousel1 from "../components/serviceBrandCarousel1.jsx";
import TestimonialsCard from "../components/testimonilaCard";
import ButtonCom from "../components/buttonCom";
// import ServiceBrandCarousel2 from "../components/serviceBrandCarousel2";
import { Link, useNavigate } from "react-router-dom";
import scrollimg from "../assets/scrollimg.svg";
import serviceimg1 from "../assets/service1.webp";
import serviceimg2 from "../assets/service2.webp";
import serviceimg3 from "../assets/service3.webp";
import serviceimg4 from "../assets/service4.webp";
import serviceimg5 from "../assets/service5.webp";
import serviceicon1 from "../assets/serviceicon1.svg";
import serviceicon2 from "../assets/serviceicon2.svg";
import serviceicon3 from "../assets/serviceicon3.svg";
import serviceicon4 from "../assets/serviceicon4.svg";
import serviceicon5 from "../assets/serviceicon5.svg";
import comapre1 from "../assets/before.webp";
import comapre2 from "../assets/after.webp";

// swiper
import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Navigation and Pagination modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
// slider
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

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

  const stats = [
    { value: "150+", label: "Clients" },
    { value: "450+", label: "MN sq ft area serving" },
    { value: "50", label: "Employees" },
    { value: "10+", label: "Headquarters" },

    { value: "10+", label: "Segments" },
    { value: "80+", label: "Client Satisfaction Index" },
  ];
  const services = [
    { img: serviceimg1, icon: serviceicon1, title: "House Keeping" ,link: "/services/house-keeping" ,linkc: "/casestudy/housekeeping"},
    { img: serviceimg2, icon: serviceicon2, title: "Gardening" ,link: "services/horticulture-landscaping"  ,linkc: "/casestudy/horticulture-landscaping"},
    { img: serviceimg3, icon: serviceicon3, title: "Mechanical" ,link: "services/mechanical" ,linkc: "/casestudy/mechanical"},
    { img: serviceimg4, icon: serviceicon4, title: "Plumbing",link: "services/plumbing" ,linkc: "/casestudy/plumbing"},
    { img: serviceimg5, icon: serviceicon5, title: "Electrical" ,link: "services/electrical" ,linkc: "/casestudy/electrical"},
  ];  const services2 = [
    { img: serviceimg1, icon: serviceicon1, title: "HealthCare" ,link: "/services/house-keeping" ,linkc: "/casestudy/housekeeping"},
    { img: serviceimg2, icon: serviceicon2, title: "Township Facility Management" ,link: "services/horticulture-landscaping"  ,linkc: "/casestudy/horticulture-landscaping"},
    { img: serviceimg3, icon: serviceicon3, title: "Recidential Facility Management" ,link: "services/mechanical" ,linkc: "/casestudy/mechanical"},
    { img: serviceimg4, icon: serviceicon4, title: "Corporate Properties",link: "services/plumbing" ,linkc: "/casestudy/plumbing"},
    { img: serviceimg5, icon: serviceicon5, title: "Commercial Complex" ,link: "services/electrical" ,linkc: "/casestudy/electrical"},
  ];
  useEffect(() => {
    const scrollButton = document.getElementById("scroll-button");

    if (scrollButton) {
      scrollButton.addEventListener("click", () => {
        const viewportHeight = window.innerHeight; // Get the height of the viewport
        window.scrollBy({
          top: viewportHeight * 1.5, // Scroll down 1.5 times the viewport height
          behavior: "smooth", // Smooth scroll effect
        });
      });

      // Cleanup event listener on component unmount
      return () => {
        scrollButton.removeEventListener("click", () => {});
      };
    } else {
      console.error("Element with ID 'scroll-button' not found in the DOM.");
    }
  }, []); // Empty dependency array ensures this runs once after the component mounts

  // swiper setting
  const [swiperSettings, setSwiperSettings] = useState({
    slidesPerView: 4, // Default value
    spaceBetween: 50, // Default value
  });

  // Function to handle the screen width change
  const updateSwiperSettings = () => {
    const width = window.innerWidth;

    if (width <= 450) {
      setSwiperSettings({
        slidesPerView: 1, // 1 card per view for mobile
        spaceBetween: 50, // 50px space between slides
      });
    } else if (width <= 768) {
      setSwiperSettings({
        slidesPerView: 2, // 2 cards per view for tablets
        spaceBetween: 20, // 20px space between slides
      });
    } else {
      setSwiperSettings({
        slidesPerView: 4, // 4 cards per view for desktops
        spaceBetween: 50, // 50px space between slides for desktop
      });
    }
  };

  // Update the swiper settings when the component mounts or when the window is resized
  useEffect(() => {
    updateSwiperSettings();
    window.addEventListener("resize", updateSwiperSettings);
    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", updateSwiperSettings);
  }, []);
  // slider
  const image1 = comapre1;
  const image2 = comapre2;

  return (
    <div className="homepage-container">
<div class="whatsapp-icon">
    <a href="https://wa.me/1234567890" target="_blank">
        <img src={whatsapp} alt="WhatsApp" />
    </a>
</div>

      <div className="image-container-homepage">
        <img src={homepageimage} alt="homepage" />
        <p className="homepage-image-text">
          Virat was founded because of our passion for hygiene ,organizing and
          creating a healthy space for all, which we developed into a much
          larger scale that today is known as virat facility management.
          <Link to="/services" className="herosecbtn">Explore Services</Link>
        </p>
        <div className="herodesignwhite"></div>
        <div className="heroscrollbtn" id="scroll-button">
          <img src={scrollimg} alt="" />
        </div>
      </div>{" "}
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div className="stat-item" key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="homapage-headtext">
        <span className="homepage-headtext-p">
          Where Expertise Convergence with Experience
        </span>
        <ButtonCom
          name={"Explore now"}
          link={() => {
            navigate("/about");
          }}
        />
      </div>
      <div className="about-us-section">
        <img
          src={aboutsection}
          className="about-background-img"
          alt="homepage"
        />
        <div className="about-section-content" id="target">
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
                onClickFun={() => {
                  navigate("/about");
                }}
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
            <h2>Our Services </h2>
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
          <div className="Serviceecards">
            <Swiper
              spaceBetween={swiperSettings.spaceBetween}
              slidesPerView={swiperSettings.slidesPerView}
              pagination={{ clickable: true }}
              navigation
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <Link  to={service.link}>
                  <div className="servcard">
                    <div
                      className="card-image"
                      style={{ backgroundImage: `url(${service.img})` }}
                    ></div>
                    <div className="card-content">
                      <h2>{service.title}</h2>
                      <img src={service.icon} alt={`${service.title} icon`} />
                    </div>
                  </div> </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>{" "}
      {/* <div>
        {" "}
        <div className="hvw-heading">
          <h2>How Virat Works </h2>
        </div>
        <div className="how-virat-works">
          <div className="process-item">
            <div className="processcont">
              {" "}
              <h6 className="step-number">1</h6>
              <h3>BOOK</h3>
            </div>
            <p>
              Schedule your service in just a few clicks and choose the time
              that suits you best.
            </p>
          </div>
          <div className="process-item">
            <div className="processcont">
              {" "}
              <h6 className="step-number">2</h6>
              <h3> WE CLEANING</h3>
            </div>
            <p>
              Our professionals arrive on time, equipped to handle every
              cleaning detail with care.
            </p>
          </div>
          <div className="process-item">
            <div className="processcont">
              {" "}
              <h6 className="step-number">3</h6>
              <h3>SIT BACK & RELAX</h3>
            </div>
            <p>
              Enjoy a spotless space without the hassle—leave the hard work to
              us.
            </p>
          </div>
          <div className="process-item">
            <div className="processcont">
              {" "}
              <h6 className="step-number">4</h6>
              <h3>EASY PAYMENT</h3>
            </div>
            <p>
              Make secure, hassle-free payments with flexible options that suit
              you.
            </p>
          </div>
        </div>{" "}
      </div>{" "} */}
      <div className="image-comparison-container">
        <div className="image-comparison">
          <ReactCompareSlider
            changePositionOnHover
            itemOne={<ReactCompareSliderImage src={image1} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={image2} alt="Image two" />}
          />
        </div>
      </div>
      <div className="service-brand-scroller">
        <div className="brand-scroller-head">
          <p>Service to Brands</p>
        </div>
        <div className="brand-line"></div>
        <div className="partnerslogoline">
          <ServiceBrandCarousel />
          <ServiceBrandCarousel1 />
        </div>
        {/* <div className="wrapper-two">
          <ServiceBrandCarousel2 />
        </div> */}
      </div>
      <div className="casestudy_container">
        {" "}
        <div className="casestudy-heading">
          <h2>Our Case Studies </h2>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={swiperSettings.spaceBetween}
          slidesPerView={swiperSettings.slidesPerView}
          pagination={{ clickable: true }}
          navigation
          className="casestudy_swiper"
        >
          {services2.map((service) => (
            <SwiperSlide key={service.id} className="casestudy_card">

              <Link to={service.linkc}>
              <div className="casestudy_image_container">
                <img src={service.img} alt={service.title} />
              </div>
              <p className="casestudy_title">{service.title}</p> </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link to={"/services"} className="casestudy_see_more">See More</Link>
      </div>
      <div className="testimonila-section">
        <img
          src={testimonials}
          className="about-background-img service-back-img"
          alt="homepage"
        />
        <div className="testimonial-section-content">
          <div className="testimonila-trust-client">
            <p>Trust our Client’ words</p>
          </div>{" "}
          <div className="testimonila-heading">
            <img src={cub} className="about-heading-img" alt="homepage" />
            Our Testimonials
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
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={150}
              slidesPerView={3}
              pagination={swiperSettings.pagination}
              navigation={swiperSettings.navigation}
            >
              <SwiperSlide>
                <TestimonialsCard
                  image={test1}
                  disc={
                    "Absolutely outstanding service! We've been partnered with Virat Facility Management Services for our facility management needs, and they have exceeded our expectations. The attention to detail in their housekeeping services is unparalleled. Our facility has never looked cleaner or more organized. Professionalism and efficiency are their hallmarks. Highly recommended."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  image={test1}
                  disc={
                    "Their housekeeping services are not only thorough but also done with a smile. The team is reliable, and their dedication to maintaining a clean and welcoming environment is commendable. It's a pleasure working with them!"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  image={test3}
                  disc={
                    "Exceptional service from Virat. As a bank, maintaining a clean and secure environment is of utmost importance. We trust Virat for their outstanding facility management services. Their attention to detail, professionalism, and commitment to security protocols have surpassed our expectations. It's a pleasure working with a company that understands the unique needs of a financial institution."
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  image={test4}
                  disc={
                    "VFM has been an invaluable partner in maintaining our office spaces. Their housekeeping services are top-notch, and their facility management expertise is evident in the seamless operation of our facilities. We appreciate the personalized attention they provide, ensuring our unique needs are always met. Highly recommended for anyone seeking a reliable and professional service!"
                  }
                />
              </SwiperSlide>
              <SwiperSlide>
                <TestimonialsCard
                  image={test5}
                  disc={
                    "As a property manager, finding a reliable facility management company is crucial. Virat has consistently delivered exceptional service. The professionalism, punctuality, and attention to detail have made them our go-to choice. Our tenants have also noticed the positive change in the cleanliness and functionality of our properties."
                  }
                />
              </SwiperSlide>
            </Swiper>
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
      </div>{" "}
      {/* contact  */}
      <div className="contactSection">
        {/* Map Background */}
        <div className="mapContainer">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7539.459930366044!2d72.86337742817217!3d19.119498752877575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734072198756!5m2!1sen!2sin"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Contact Card */}
        <div className="contactCard">
          <div className="contactItem">
            <span className="icon">📍</span>
            <div>
              <h3>Our Location</h3>
              <p>
                B wing Shop no. 39 Upperdesk, Giriraj Industrial Estate, MIDC
                Andheri(East) Mumbai-400093
              </p>
            </div>
          </div>
          <div className="contactItem">
            <span className="icon">✉️</span>
            <div>
              <h3>Our Email</h3>
              <p>vfm.services2017@gmail.com</p>
            </div>
          </div>
          <div className="contactItem">
            <span className="icon">📞</span>
            <div>
              <h3>Our Phone</h3>
              <p>+91 9833535447</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;

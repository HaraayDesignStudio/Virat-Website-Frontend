import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import abtheroimg from "../assets/serviceabt.jpg";
import styles from "./Services.module.css";
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
// swiper
import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Navigation and Pagination modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
import cub from "../assets/Cub.png";
const Service = () => {
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
  const services = [
    { image: serviceimg1, icon: serviceicon1, title: "House Keeping" },
    { image: serviceimg2, icon: serviceicon2, title: "Gardening" },
    { image: serviceimg3, icon: serviceicon3, title: "Mechanical" },
    { image: serviceimg4, icon: serviceicon4, title: "Plumbing" },
    { image: serviceimg5, icon: serviceicon5, title: "Electrical" },
  ];
  return (
    <>
      <div className={styles.services}>
        {/* Top Section */}

        <div className={styles.topSection}>
          {" "}
          <img className={styles.heroimg} src={abtheroimg} alt="" />
          <div>
            <h1>Services we Offer</h1>
            <p>
              Comprehensive facility management solutions designed to enhance
              your environment and simplify your daily operations. From cleaning
              to specialized services, we’re here to support every aspect of
              your facility needs.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesSection}>
          {/* Background */}
          <div className={styles.background}></div>

          {/* Text Section */}
          <div className={styles.textContainer}>
            <div>
              {" "}
              <img src={cub} className="about-heading-img" alt="homepage" />
              <h2>Our Services</h2>
            </div>
            <h1>The Hero to your Rescue</h1>
            <p>
              We love being the helping hand you need. Here are a few services
              where we offer our expertise.
            </p>
          </div>

          {/* Cards */}
          <div className={styles.cardsContainer}>
            {services.map((service, index) => (
              <div className={styles.card} key={index}>
                <img src={service.image} alt={service.title} />
                <div className={styles.cardText}>
                  <h3>{service.title}</h3>
                  <img src={service.icon} alt={`${service.title} icon`} />
                </div>
              </div>
            ))}
          </div>
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
            {services.map((service) => (
              <SwiperSlide key={service.id} className="casestudy_card">
                <div className="casestudy_image_container">
                  <img src={service.image} alt={service.title} />
                </div>
                <p className="casestudy_title">{service.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <button className="casestudy_see_more">See More</button>
        </div>
        {/* contact  */}
        <div className={styles.contactSection}>
          {/* Map Background */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7539.459930366044!2d72.86337742817217!3d19.119498752877575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734072198756!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Card */}
          <div className={styles.contactCard}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Our Location</h3>
                <p>
                  B wing Shop no. 39 Upperdesk, Giriraj Industrial Estate, MIDC
                  Andheri(East) Mumbai-400093
                </p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>Our Email</h3>
                <p>vfm.services2017@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Our Phone</h3>
                <p>+91 9833535447</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

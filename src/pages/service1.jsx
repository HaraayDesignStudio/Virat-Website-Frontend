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
import cub from "../assets/Cub.png";
const Service = () => {
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
        {/* contact  */}
        <div className={styles.contactSection}>
          {/* Map Background */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.9041628509177!2d73.78098431489233!3d18.523616987404136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf021d524b4f%3A0x8c3b08c9c11256fa!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1675850457476!5m2!1sen!2sin"
              allowFullScreen=""
              loading="lazy"
              title="Google Maps"
            ></iframe>
          </div>

          {/* Contact Card */}
          <div className={styles.contactCard}>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📍</span>
              <div>
                <h3>Our Location</h3>
                <p>W 13th line, Vanaz Street, Pune, Maharashtra, 500001</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>✉️</span>
              <div>
                <h3>Our Email</h3>
                <p>hellovirat@gmail.com</p>
              </div>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.icon}>📞</span>
              <div>
                <h3>Our Phone</h3>
                <p>+91 9874551251</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;

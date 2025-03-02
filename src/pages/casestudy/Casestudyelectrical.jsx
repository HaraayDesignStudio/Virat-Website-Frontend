// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./casestudy.module.css";
import heroImage from "../../assets/service-back.png"; // Replace with a valid dummy image path
import teamImage from "../../assets/electricalhero.png"; // Replace with a valid dummy image path
import conclusion from "../../assets/electricalconclusion.png"; // Replace with a valid dummy image path
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/round.png";
// import scrollimg from "..../assets/scrollimg.svg";
import serviceimg1 from "../../assets/service1.webp";
import serviceimg2 from "../../assets/service2.webp";
import serviceimg3 from "../../assets/service3.webp";
import serviceimg4 from "../../assets/service4.webp";
import serviceimg5 from "../../assets/service5.webp";
import serviceicon1 from "../../assets/serviceicon1.svg";
import serviceicon2 from "../../assets/serviceicon2.svg";
import serviceicon3 from "../../assets/serviceicon3.svg";
import serviceicon4 from "../../assets/serviceicon4.svg";
import serviceicon5 from "../../assets/serviceicon5.svg";
// swiper


import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper electricalconclusion.png
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Navigation and Pagination modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
const CaseStudy = () => {
  const services = [
    { img: serviceimg1, icon: serviceicon1, title: "House Keeping" },
    { img: serviceimg2, icon: serviceicon2, title: "Gardening" },
    { img: serviceimg3, icon: serviceicon3, title: "Mechanical" },
    { img: serviceimg4, icon: serviceicon4, title: "Plumbing" },
    { img: serviceimg5, icon: serviceicon5, title: "Electrical" },
  ];
  // swiper setting
  const [swiperSettings, setSwiperSettings] = useState({
    slidesPerView: 4, // Default value
    spaceBetween: 50, // Default value
  });

  // Function to handle the screen width change
  const updateSwiperSettings = () => {
    const width = window.innerWidth;

    if (width <= 550) {
      setSwiperSettings({
        slidesPerView: 1, // 1 card per view for mobile
        spaceBetween: 20, // 50px space between slides
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
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.titlea}>
          Powering Excellence through Electrical Services
          </h1>
        </div>
      </section>{" "}
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Introduction</h2>
          <p className={styles.introText}>
          Virat Facility Management (VFM) has earned its place as a leader in delivering reliable, efficient, and client-focused facility solutions. Their electrical services stand as a testament to their technical expertise and commitment to safety and sustainability. This case study illustrates how VFM resolved critical electrical issues for a large commercial complex, ensuring uninterrupted operations and a safer working environment.
          </p>
        </div>
        <div className={styles.introImageContainer}>
          <img
            src={teamImage}
            alt="Introduction Section"
            className={styles.introImage}
          />
        </div>
      </section>
      <section>
        <div className={styles.overviewTextContainer}>
          <h2 className={styles.overviewTitle}>Client Overview</h2>
          <p className={styles.overviewText}>
          The client, a multi-tenant commercial complex with over 25 businesses and daily foot traffic of more than 2,000 people, faced persistent electrical challenges. Frequent power outages, high energy bills, and safety concerns were affecting tenant satisfaction and operational efficiency.
          </p>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Frequent Power Failures</h3>
          <p className={styles.cardText}>
          Regular electrical disruptions hampered tenant operations, causing frustration and financial losses.    </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>High Energy Consumption</h3>
          <p className={styles.cardText}>
          Outdated electrical systems and inefficient lighting significantly increased energy costs.   </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Safety Hazards</h3>
          <p className={styles.cardText}>
          Old wiring, overloaded circuits, and unmaintained panels posed risks of electrical fires and other accidents.   </p>
        </div>  <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Inadequate Maintenance</h3>
          <p className={styles.cardText}>
          The lack of a systematic approach to electrical maintenance led to recurring issues and increased downtime.
          </p>
        </div>
      </section>
      <section className={styles.approachsec}>
        <div className={styles.approachmain}>
          <div className={styles.approachleft}>
            <h1>The Virat Approach</h1>
            <p>
            Virat Facility Management took a structured, hands-on approach to address the client’s electrical challenges effectively.
            </p>
          </div>
          <div className={styles.approachright}>
            <div>
              <h1>01. Detailed Electrical Audit</h1>
              <p>
              VFM’s certified electricians conducted a thorough inspection of the electrical infrastructure, identifying outdated equipment, inefficiencies, and safety hazards.</p>
            </div>
            <div>
              <h1>02. System Upgrades</h1>
              <p>
              Key systems, including wiring, circuit breakers, and switchboards, were upgraded to modern, energy-efficient alternatives. </p>
            </div>
            <div>
              <h1>03. Energy Optimization</h1>
              <p>
              VFM installed LED lighting throughout the complex and introduced motion-sensor technology in common areas to reduce energy consumption.   </p>
            </div>
            <div>
              <h1>04. Enhanced Safety Measures</h1>
              <p>
              Surge protectors, fire-resistant cables, and modern grounding systems were installed to eliminate safety risks. </p>
            </div>   <div>
              <h1>05. Preventive Maintenance Program</h1>
              <p>
              A regular maintenance schedule was implemented to ensure timely inspections, repairs, and replacements, reducing future disruptions. </p>
            </div>  <div>
              <h1>06. 24/7 Support Team</h1>
              <p>
              A dedicated team of on-call electricians was assigned to provide immediate assistance in case of emergencies. </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.resultsec}>
        <h1>Results Delivered</h1>

        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={swiperSettings.spaceBetween}
          slidesPerView={swiperSettings.slidesPerView}
          pagination={{ clickable: true }}
          navigation
          className="casestudy_swiper"
        >
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Uninterrupted Power Supply</h3>
              <p className={styles.cardText}>
              Electrical disruptions were reduced to nearly zero, ensuring smooth operations for all tenants.  </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Energy Savings</h3>
              <p className={styles.cardText}>
              Energy consumption dropped by 35%, significantly lowering utility costs and aligning the complex with sustainability goals.  </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Improved Safety Standards</h3>
              <p className={styles.cardText}>
              With modern safety measures in place, the risk of electrical accidents was completely mitigated, boosting tenant confidence.  </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Tenant Satisfaction</h3>
              <p className={styles.cardText}>
              Enhanced electrical reliability and reduced energy bills improved tenant retention and attracted new businesses to the complex.
              </p>{" "}
            </div>
          </SwiperSlide>    <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Future-Proof Infrastructure</h3>
              <p className={styles.cardText}>
              The upgraded electrical systems ensured long-term reliability, reducing maintenance costs and extending the lifecycle of the infrastructure.
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.testimo}>
        <h1> Testimonial from the Client</h1>
        <p>
          {" "}
          "Virat Facility Management has been a game-changer for our commercial complex. Their expertise in electrical services not only resolved our immediate challenges but also transformed our infrastructure into a modern, efficient, and safe system. The tenants are happier, and we’ve seen a significant drop in energy costs. Partnering with VFM was one of our best decisions."
          </p>
        <p>— Facility Manager, Commercial Complex</p>
      </section> <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Conclusion</h2>
          <p className={styles.introText}>
          Virat Facility Management’s electrical services demonstrate their ability to address complex challenges with innovative and client-focused solutions. By prioritizing safety, efficiency, and sustainability, VFM ensured their client’s electrical systems were not just functional but future-ready.
This case study underscores VFM’s commitment to empowering businesses through reliable and transformative facility management solutions.
</p>
        </div>
        <div className={styles.introImageContainer}>
          <img
            src={conclusion}
            alt="Introduction Section"
            className={styles.introImage}
          />
        </div>
      </section>
      <div className="services-cards">
             <div className="Serviceecards">
             <h1> Our Services</h1>
               <Swiper
                 spaceBetween={swiperSettings.spaceBetween}
                 slidesPerView={swiperSettings.slidesPerView}
                 // pagination={{ clickable: true }}
                 // navigation
               >
                 {services.map((service, index) => (
                   <SwiperSlide key={index}>
                     <div className="servcard">
                       <div
                         className="card-image"
                         style={{ backgroundImage: `url(${service.img})` }}
                       ></div>
                       <div className="card-content">
                         <h2>{service.title}</h2>
                         <img src={service.icon} alt={`${service.title} icon`} />
                       </div>
                     </div>
                   </SwiperSlide>
                 ))}
               </Swiper>
             </div>
           </div>
    </>
  );
};

export default CaseStudy;

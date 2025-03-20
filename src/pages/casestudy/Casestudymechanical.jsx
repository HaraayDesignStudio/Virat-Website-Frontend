// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./casestudy.module.css";
import heroImage from "../../assets/service-back.png"; // Replace with a valid dummy image path
import teamImage from "../../assets/mechanical.png"; // Replace with a valid dummy image path
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
import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Navigation and Pagination modules

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination"; import { Helmet } from "react-helmet-async";
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
      <section className={styles.heroSection}>  <Helmet>
                  <title>Expert Residential Facility Management - VFMS</title>
                  <meta name="description" content="VFMS ensures safe, efficient homes with expert mechanical services, delivering innovative and reliable solutions for seamless residential complex management." />
                </Helmet>
        <div className={styles.heroContent}>
          <h1 className={styles.titlea}>
          Residential Facility Management
          </h1>
        </div>
      </section>{" "}
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Introduction</h2>
          <p className={styles.introText}>
          Virat Facility Management (VFM) has been at the forefront of delivering reliable and innovative  facility solutions. Among their wide array of services, their mechanical services have consistently  proven to be a cornerstone of their reputation. This case study delves into how VFM’s mechanical  expertise helped a leading residential complex overcome significant operational challenges ensuring safety, efficiency, and peace of mind.
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
          <h2 className={styles.overviewTitle}>Challenges Faced</h2>
          {/* <p className={styles.overviewText}>
            The client, a prominent corporate office in a bustling metro city,
            was facing challenges wi maintaining a clean and organized
            workspace. Their existing housekeeping team struggled to keep pace
            with the demands of a high-traffic office environment, leading to
            dissatisfaction among employees and visitors alike.{" "}
          </p> */}
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Aging Infrastructure</h3>
          <p className={styles.cardText}>
          Several mechanical systems had exceeded their recommended lifecycle, leading to frequent  breakdowns and inefficiencies.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>High Energy Costs</h3>
          <p className={styles.cardText}>
          Outdated equipment consumed excessive energy, inflating operational costs and leaving th management struggling to stay within budget.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Emergency Response Gaps</h3>
          <p className={styles.cardText}>
          The lack of a skilled team on-site often delayed repairs during emergencies, causing  inconvenience to residents.
          </p>
        </div>  <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Safety Concerns</h3>
          <p className={styles.cardText}>
          Without regular maintenance, the mechanical systems posed potential safety risks,  including leaks, fire hazards, and equipment failure    </p>
        </div>
      </section>
      <section className={styles.approachsec}>
        <div className={styles.approachmain}>
          <div className={styles.approachleft}>
            <h1>The Virat Approach</h1>
            <p>
            Virat Facility Management tackled these issues with a structured and proactive strategy.
            </p>
          </div>
          <div className={styles.approachright}>
            <div>
              <h1>01. Comprehensive System Audit</h1>
              <p>
              VFM’s team conducted a detailed inspection of all mechanical systems to assess their  condition, identify inefficiencies, and pinpoint safety risks.
              </p>
            </div>
            <div>
              <h1>02. Upgradation Plan</h1>
              <p>
              An upgrade roadmap was created, prioritizing critical systems like HVAC units and  generators. VFM also recommended energy-efficient replacements for aging equipment.
              </p>
            </div>
            <div>
              <h1>03. 24/7 Maintenance Team</h1>
              <p>
              A dedicated team of trained technicians was deployed to handle regular maintenance and  respond swiftly to emergencies.
              </p>
            </div>
            <div>
              <h1>04. Preventive Maintenance Schedule</h1>
              <p>
              VFM implemented a preventive maintenance program to ensure that equipment remained in  optimal condition, minimizing unexpected failures.
              </p>
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
              <h3 className={styles.cardTitle}>Improved System Efficiency</h3>
              <p className={styles.cardText}>
              Upgraded HVAC systems and optimized mechanical operations resulted in a noticeable  improvement in performance, ensuring uninterrupted services to residents
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Cost Savings</h3>
              <p className={styles.cardText}>
              Energy-efficient solutions led to a 25% reduction in energy bills within the first six mon significantly easing the client’s financial strain.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Enhanced Safety</h3>
              <p className={styles.cardText}>
              With regular inspections and immediate repairs, safety incidents were reduced to zero,  providing residents and management with peace of mind.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Timely Emergency Responses</h3>
              <p className={styles.cardText}>
              VFM’s 24/7 availability meant that breakdowns were resolved quickly, minimizing disruptions  for the residents.
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.testimo}>
        <h1> Testimonial from the Client</h1>
        <p>
          {" "}
          "Virat Facility Management has transformed the way we manage our residential complex. Their  mechanical services team is not just skilled but proactive and responsive. Knowing that we can  rely on them 24/7 has brought immense peace of mind to our residents. The energy savings and  improved safety are bonuses that have exceeded our expectations."
        </p>
        <p> — Resident Welfare Association President</p>
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

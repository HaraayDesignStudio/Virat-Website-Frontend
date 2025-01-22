// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./casestudy.module.css";
import heroImage from "../../assets/service-back.png"; // Replace with a valid dummy image path
import teamImage from "../../assets/teamimg.jpg"; // Replace with a valid dummy image path 
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
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
//
const CaseStudy = () => {
 
   const services = [
     { img: serviceimg1, icon: serviceicon1, title: "House Keeping"  ,link: "/services/house-keeping"},
     { img: serviceimg2, icon: serviceicon2, title: "Gardening" ,link: "/services/horticulture-landscaping" },
     { img: serviceimg3, icon: serviceicon3, title: "Mechanical"  ,link: "/services/mechanical"},
     { img: serviceimg4, icon: serviceicon4, title: "Plumbing" ,link: "/services/plumbing" },
     { img: serviceimg5, icon: serviceicon5, title: "Electrical"  ,link: "/services/electrical"},
   ];
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
            Redefining Housekeeping Services with Excellence
          </h1>
        </div>
      </section>{" "}
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Introduction</h2>
          <p className={styles.introText}>
            Virat Facility Management (VFM) is a trusted name in facility
            management services, known for its commitment to quality,
            professionalism, and customer satisfaction. Specializing in a range
            of offerings, their housekeeping services have consistently stood
            out for their personalized approach and exceptional results. This
            case study explores how VFM has transformed housekeeping for one of
            their key clients, setting a benchmark in the industry.
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
            The client, a prominent corporate office in a bustling metro city,
            was facing challenges wi maintaining a clean and organized
            workspace. Their existing housekeeping team struggled to keep pace
            with the demands of a high-traffic office environment, leading to
            dissatisfaction among employees and visitors alike.{" "}
          </p>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Inconsistent Cleaning Standards</h3>
          <p className={styles.cardText}>
            The client reported irregular cleaning schedules and visible lapses
            in hygiene.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Lack of Trained Staff</h3>
          <p className={styles.cardText}>
            The previous service provider failed to deploy skilled personnel who
            understood modern cleaning protocols.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Low Employee Morale</h3>
          <p className={styles.cardText}>
            A poorly maintained workplace was affecting staff motivation and
            productivity.
          </p>
        </div>
      </section>
      <section className={styles.approachsec}>
        <div className={styles.approachmain}>
          <div className={styles.approachleft}>
            <h1>The Virat Approach</h1>
            <p>
              Virat Facility Management stepped in with a comprehensive plan
              tailored to the client's unique needs. Their strategy combined
              technology, skilled manpower, and a customer-centric focus.
            </p>
          </div>
          <div className={styles.approachright}>
            <div>
              <h1>01. Detailed Assessment</h1>
              <p>
                VFM conducted a thorough audit of the premises to identify
                high-traffic areas, probl zones, and hygiene gaps.
              </p>
            </div>
            <div>
              <h1>02. Customized Solutions</h1>
              <p>
                Based on the findings, a cleaning schedule was designed to
                ensure regular and dee cleaning of all critical areas.{" "}
              </p>
            </div>
            <div>
              <h1>03. Training and Deployment</h1>
              <p>
                Housekeeping staff underwent rigorous training in advanced
                cleaning techniques, includin the use of eco-friendly cleaning
                agents and equipment{" "}
              </p>
            </div>
            <div>
              <h1>04. Tech-Driven Monitoring</h1>
              <p>
                VFM employed real-time monitoring tools to track cleaning
                schedules and address issues proactively{" "}
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
              <h3 className={styles.cardTitle}>Enhanced Hygiene Standards</h3>
              <p className={styles.cardText}>
                The office space transformed into a spotless and welcoming
                environment, receivi accolades from employees and clients.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Increased Productivity</h3>
              <p className={styles.cardText}>
                Employees reported higher satisfaction levels, citing the clean
                and organized environment as a motivating factor.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Cost Efficiency</h3>
              <p className={styles.cardText}>
                VFM’s efficient practices reduced wastage of cleaning materials
                and optimized manpow deployment, leading to cost savings for the
                client.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Sustainability</h3>
              <p className={styles.cardText}>
                By using eco-friendly products, the initiative contributed to
                the client’s commitment to sustainability and green practices
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.testimo}>
        <h1> Testimonial from the Client</h1>
        <p>
          {" "}
          "Virat Facility Management has truly been a game-changer for us. Their
          housekeeping services go beyond mere cleaning – they’ve created a
          space where our employees feel valued and motivated. Their team’s
          professionalism and attention to detail are unmatched. We look forward
          to continuing this partnership for years to come."
        </p>
        <p> ---Operations Manager, Corporate Client</p>
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
              <Link to={service.link}>  <div className="servcard">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${service.img})` }}
                  ></div>
                  <div className="card-content">
                    <h2>{service.title}</h2>
                    <img src={service.icon} alt={`${service.title} icon`} />
                  </div>
                </div></Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default CaseStudy;

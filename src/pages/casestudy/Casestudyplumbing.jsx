// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./casestudy.module.css";
import heroImage from "../../assets/service-back.png"; // Replace with a valid dummy image path
import teamImage from "../../assets/plumbinghero.jpg"; // Replace with a valid dummy image path electricalcon.png
import conclusion from "../../assets/electricalcon.png"; // Replace with a valid dummy image path
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
          Redefining Plumbing Services with Precision and Care
          </h1>
        </div>
      </section>{" "}
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Introduction</h2>
          <p className={styles.introText}>
          Virat Facility Management (VFM) is known for its commitment to delivering exceptional facility management services. Among their many offerings, plumbing services stand out for their precision, reliability, and attention to detail. This case study explores how VFM resolved critical plumbing issues for a high-rise commercial building, ensuring uninterrupted water supply and optimal system performance.  </p>
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
          The client, a 15-story commercial building with over 50 offices and a footfall of 1,500 people daily, was facing significant plumbing challenges. Frequent complaints from tenants about water leakage, inconsistent water pressure, and drainage issues were impacting the building’s reputation and tenant satisfaction.
          </p>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Recurring Leaks</h3>
          <p className={styles.cardText}>
          Persistent pipe leaks in common areas and restrooms led to water wastage and frequent repair costs. </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Inconsistent Water Pressure</h3>
          <p className={styles.cardText}>
          Higher floors often experienced low water pressure, disrupting daily activities and causing tenant dissatisfaction.   </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Clogged Drains</h3>
          <p className={styles.cardText}>
          Drainage issues in restrooms and kitchens led to unpleasant odors and hygiene concerns, affecting the overall experience for tenants and visitors.  </p>
        </div>  <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Aging Infrastructure</h3>
          <p className={styles.cardText}>
          Many pipelines and fixtures were outdated, leading to recurring maintenance needs and inefficiencies.</p>
          </div>
      </section>
      <section className={styles.approachsec}>
        <div className={styles.approachmain}>
          <div className={styles.approachleft}>
            <h1>The Virat Approach</h1>
            <p>
            Virat Facility Management implemented a structured plan to address the client’s plumbing issues effectively.

            </p>
          </div>
          <div className={styles.approachright}>
            <div>
              <h1>01. Detailed Assessment:
              </h1>
              <p>
              VFM’s plumbing experts conducted a comprehensive audit of the building’s plumbing system, identifying root causes for leaks, low pressure, and drainage issues.
 </p>
            </div>
            <div>
              <h1>02. Customized Repair and Replacement:
              </h1>
              <p>
              The team prioritized critical repairs and replaced outdated pipelines and fixtures with high-quality, durable materials.
              </p>
            </div>
            <div>
              <h1>03.Pressure Optimization</h1>
              <p>
              VFM installed pressure-regulating valves and upgraded the water distribution system to ensure consistent water pressure across all floors.
              </p>
            </div>
            <div>
              <h1>04. Drainage Overhaul
              </h1>
              <p>
              Advanced tools were used to clear clogged drains, while preventive measures were put in place to avoid future blockages.
              </p>
            </div>  <div>
              <h1>05. Preventive Maintenance Program
              </h1>
              <p>
              A scheduled maintenance plan was introduced to ensure regular inspections and timely interventions, preventing future disruptions.
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
              <h3 className={styles.cardTitle}>Eliminated Leaks</h3>
              <p className={styles.cardText}>
              All leaks were successfully addressed, resulting in zero water wastage and a noticeable reduction in repair expenses.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Consistent Water Pressure</h3>
              <p className={styles.cardText}>
              Tenants across all floors experienced consistent water pressure, enhancing their daily comfort and productivity.
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Improved Hygiene
              </h3>
              <p className={styles.cardText}>
              With unclogged drains and a clean, odor-free environment, the building regained its appeal for tenants and visitors alike.
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
              Upgrading to modern plumbing systems reduced water consumption, lowering utility bills and improving the building’s operational efficiency.
              </p>{" "}
            </div>
          </SwiperSlide>  <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Increased Tenant Satisfaction</h3>
              <p className={styles.cardText}>
              The proactive approach to plumbing maintenance enhanced tenant trust and satisfaction, resulting in better occupancy rates and positive feedback.
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.testimo}>
        <h1> Testimonial from the Client</h1>
        <p>
          {" "}
          "Virat Facility Management has been a lifesaver for our building. Their plumbing team tackled every challenge with expertise and professionalism. From fixing leaks to ensuring smooth water flow on every floor, they’ve transformed our space into a well-functioning, comfortable environment. We couldn’t be happier with the results."
          </p>
        <p>— Building Manager, Commercial Property</p>
      </section><section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Conclusion</h2>
          <p className={styles.introText}>
          Virat Facility Management’s plumbing services exemplify their commitment to excellence and customer satisfaction. By combining technical expertise with a proactive approach, they not only resolved the client’s immediate issues but also implemented long-term solutions for sustained efficiency.
This case study highlights VFM’s ability to create tailored solutions that make a real difference in their clients’ day-to-day operations, cementing their reputation as a trusted partner in facility management.
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

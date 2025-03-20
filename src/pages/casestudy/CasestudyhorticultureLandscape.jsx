// HeroSection.jsx
import React, { useEffect, useState } from "react";
import styles from "./casestudy.module.css";
import heroImage from "../../assets/service-back.png"; // Replace with a valid dummy image path
import teamImage from "../../assets/horihero.png"; // Replace with a valid dummy image path hostconclusion.png
import conclusion from "../../assets/hostconclusion.png"; // Replace with a valid dummy image path 
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
import { Helmet } from "react-helmet-async";
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
      <section className={styles.heroSection}><Helmet>
                  <title>Expert Township Facility Management  - VFMS</title>
                  <meta name="description" content="VFMS specializes in expert township facility management, offering sustainable landscaping, horticulture, and maintenance to enhance aesthetics and functionality." />
                </Helmet>
        <div className={styles.heroContent}>
          <h1 className={styles.titlea}>
          Township Facility Management
          </h1>
        </div>
      </section>{" "}
      <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Introduction</h2>
          <p className={styles.introText}>
          Virat Facility Management (VFM) has earned a reputation for transforming ordinary spaces into extraordinary environments through their specialized services. Their horticulture and landscape services have been instrumental in creating lush, inviting, and sustainable green spaces. This case study explores how VFM revitalized the landscape of a prestigious residential township, blending aesthetics, functionality, and sustainability.       </p>
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
          The client, a luxury residential township spread across 25 acres, faced declining appeal due to poorly maintained green spaces. The township’s lawns, gardens, and recreational areas were key to its charm, but neglect and improper upkeep had left these spaces overgrown, unappealing, and underutilized.
          </p>
        </div>
      </section>
      <section className={styles.cardsSection}>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Unkempt Green Spaces</h3>
          <p className={styles.cardText}>
          Lawns and gardens were overgrown with weeds, and plants lacked proper care, diminishing the township’s aesthetic value.

          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Drainage Issues</h3>
          <p className={styles.cardText}>
          Poor irrigation and drainage systems led to waterlogging in some areas, affecting plant health and usability of the spaces.

          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Inconsistent Maintenance
          </h3>
          <p className={styles.cardText}>
          A lack of a structured maintenance schedule resulted in irregular upkeep, with seasonal plants dying off and shrubs growing haphazardly.

          </p>
        </div>   <div className={styles.card}>
          <div className={styles.cardIcon}>
            {" "}
            <img src={card2} alt="" />
          </div>
          <h3 className={styles.cardTitle}>Sustainability Gaps
          </h3>
          <p className={styles.cardText}>
          The green spaces were not aligned with sustainable practices, relying on water-intensive plants and inefficient irrigation.

          </p>
        </div>
      </section>
      <section className={styles.approachsec}>
        <div className={styles.approachmain}>
          <div className={styles.approachleft}>
            <h1>The Virat Approach</h1>
            <p>
            Virat Facility Management implemented a tailored strategy to address these challenges and rejuvenate the township’s landscapes.
            </p>
          </div>
          <div className={styles.approachright}>
            <div>
              <h1>01. Thorough Assessment</h1>
              <p>
              VFM’s horticulture experts conducted a detailed survey of the township’s green areas to understand soil conditions, plant health, and irrigation needs.
              </p>
            </div>
            <div>
              <h1>02. Landscape Redesign</h1>
              <p>
              A new landscape design was introduced, incorporating native and drought-resistant plants to enhance aesthetics while conserving resources.     </p>
            </div>
            <div>
              <h1>03. Irrigation System Revamp</h1>
              <p>
              Modern drip irrigation and sprinkler systems were installed to ensure efficient water distribution and eliminate water logging issues.
              </p>
            </div>
            <div>
              <h1>04. Regular Maintenance Program</h1>
              <p>
              A structured maintenance plan was implemented, covering lawn mowing, pruning, fertilization, and pest control to keep the greenery thriving year-round.
              </p>
            </div>    <div>
              <h1>05. Community Engagement</h1>
              <p>
              VFM conducted workshops for residents, encouraging them to participate in maintaining and enjoying the green spaces, fostering a sense of ownership and pride. </p>
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
              <h3 className={styles.cardTitle}>Revitalized Green Spaces</h3>
              <p className={styles.cardText}>
              The once-neglected lawns and gardens were transformed into lush, vibrant areas that became the pride of the township.   </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Enhanced Usability</h3>
              <p className={styles.cardText}>
              Recreational spaces were made more accessible and enjoyable, becoming popular spots for community gatherings and activities.   </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Water Conservation</h3>
              <p className={styles.cardText}>
              The shift to native plants and efficient irrigation systems resulted in a 30% reduction in water usage
              </p>{" "}
            </div>
          </SwiperSlide>{" "}
          <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Improved Aesthetics and Property Value              </h3>
              <p className={styles.cardText}>
              The beautifully maintained landscapes increased the township’s visual appeal, boosting resident satisfaction and property values.

              </p>{" "}
            </div>
          </SwiperSlide>   <SwiperSlide className="casestudy_cardr">
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                {" "}
                <img src={card2} alt="" />
              </div>
              <h3 className={styles.cardTitle}>Community Spirit</h3>
              <p className={styles.cardText}>
              The workshops and engagement activities brought residents closer, creating a stronger sense of community.
              </p>{" "}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.testimo}>
        <h1> Testimonial from the Client</h1>
        <p>
          {" "}
          "Virat Facility Management has breathed new life into our township. Their team’s expertise and dedication are evident in every corner of our landscaped spaces. Not only have they made our environment more beautiful and sustainable, but they’ve also brought our community together. It’s been a transformative experience for all of us."

        </p>
        <p> — Resident Welfare Association Chairperson
        </p>
      </section> <section className={styles.introSection}>
        <div className={styles.introTextContainer}>
          <h2 className={styles.introTitle}>Conclusion</h2>
          <p className={styles.introText}>
          Virat Facility Management’s horticulture and landscape services demonstrate their ability to combine technical expertise with creativity and sustainability. By focusing on tailored solutions and engaging the community, they turned a challenging project into a model for green living.
          This case study showcases how VFM’s commitment to excellence helps clients create and maintain spaces that are not just beautiful but also functional and sustainable, enriching lives and the environment.   </p>
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

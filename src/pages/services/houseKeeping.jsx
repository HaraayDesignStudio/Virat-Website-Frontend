import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import homepageimage from "../../assets/houseserviceheroimg.png";
import homekeeping from "../../assets/housekeeping-services-500x500.webp";
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/elastrations/03.png";
import homekeeping2 from "../../assets/girl-base.png";
import card1 from "../../assets/clean1.png";
import cardz2 from "../../assets/clean2.png";
import card3 from "../../assets/clean3.png";
import boy from "../../assets/boy.png";
import girl from "../../assets/girl.png";
import Stats from "../../components/Stats.jsx";
import FAQ from "../../components/FAQ.jsx"; import { Helmet } from "react-helmet-async";
const HouseKeeping = () => {
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

  const faqs = [
    {
      question:
        "How do you get started with our housekeeping services for our corporate or industrial facility?",
      answer:
        "To get started with our housekeeping services, contact Virat Facility Management to discuss your facility’s needs. Our team will assess your requirements, customize a housekeeping plan, and provide a proposal. Once agreed, services are initiated promptly, ensuring a clean and organized workspace tailored to your specific environment.",
    },
    {
      question:
        "What is your approach to maintaining high standards of cleanliness in banking environments?",
      answer:
        "Virat Facility Management ensures high cleanliness standards by employing specialized cleaning protocols used for corporate housekeeping services that focus on high-traffic areas, frequently touched surfaces, and secure zones. We use advanced technology and eco-friendly products, ensuring a safe, sanitized, and professional environment that meets the specific needs of banking institutions.",
    },
    {
      question:
        "Do you provide housekeeping services for both residential and commercial properties?",
      answer:
        "Yes, Virat Facility Management offers professional housekeeping services for both residential and commercial properties. We customize our cleaning solutions to meet the unique needs of each space, whether it’s luxury gated communities or a corporate office, banks, commercial office spaces, REITs, IT Hubs, ensuring a pristine environment that enhances both appearance and functionality.",
    },
    {
      question:
        "How do I choose the right housekeeping solutions for my specific needs?",
      answer:
        "To choose the right housekeeping solutions, consult with Virat Facility Management. Our experts will assess your space, understand your specific requirements, and recommend tailored services that best meet your needs. We ensure that the chosen solutions align with your goals for cleanliness, efficiency, and sustainability.",
    },
  ];

  return (
    <div className="homepage-container services-details">  <Helmet>
            <title>Professional Housekeeping Services - VFMS</title>
            <meta name="description" content="Discover VFMS, your expert housekeeping service provider in India. We offer top-notch corporate housekeeping services and tailored housekeeping solutions." />
          </Helmet>
      <div className="image-container-homepage services-background">
        <img src={homepageimage} alt="homepage" />
        <div className="service-on-text">
          <h1>Professional Housekeeping Services</h1>
          <p>
            Welcome to the backbone of Virat Facility Management services,
            housekeeping, and all the services it entails. We know how important
            it is for you to maintain a clean environment that will enhance the
            appearance and functionality of your workplace.
          </p>
        </div>
      </div>{" "}
      <Stats />
      <div className="services-first-box">
        <div className="text-content">
          <h1 className="text-h1">
            Transform Your Workspace with Pristine Housekeeping Services
          </h1>
          <p className="text-p">
            Clean office space is not only about the image of the company, but
            it can also help boost the efficiency of the employees and their
            health. That’s the reason we have developed effective yet efficient
            corporate housekeeping services so your workspace shines bright!
          </p>
          <br />
          <p className="text-h2">Our Comprehensive Housekeeping Services</p>
          <p className="text-p2">
            Now, try to picture yourself stepping into an office space that is
            clean to the point of gleaming and the air is fragranced. It will
            definitely help you to start the day with a smile. Sanitation goes
            beyond the aesthetic value; it is about making the employees feel
            wanted and appreciated so that they can perform their best.
            <br />
            <br />
            Research has found that a cluttered environment raises stress levels
            and decreases productivity, while an organized climate enhances team
            spirit. At Virat Facility Management, we aim to provide all these
            benefits through our professional housekeeping services.
          </p>
        </div>
        <div className="image-content">
          <img className="firsttxtimg" src={homekeeping} alt="homepage" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards">
          <ValuesCard
            image={card1}
            name={"Daily Cleaning"}
            disc={
              "Of course, we understand the importance of having a clean working space in the morning. With our daily cleaning service, your work environment will always be clean and prepared for use in the morning. Our services include cleaning furniture, carpets, windows, and walls and sanitizing the areas that are frequently touched, such as doors, light switches, and handles."
            }
          />
          <ValuesCard
            image={cardz2}
            name={"Deep Cleaning"}
            disc={
              "Of course, we understand the importance of having a clean working space in the morning. With our daily cleaning service, your work environment will always be clean and prepared for use in the morning. Our services include cleaning furniture, carpets, windows, and walls and sanitizing the areas that are frequently touched, such as doors, light switches, and handles."
            }
          />
          <ValuesCard
            image={card3}
            name={"Specialized Cleaning"}
            disc={
              "Each office is different, and we appreciate the need to address these differences. Our specialized cleaning services include carpet cleaning, upholstery cleaning, and window washing. Employing modern technology and organic products, we guarantee that all the areas of your office are clean and tidy."
            }
          />
        </div>
      </div>
      <div className="services-first-box second-box">
        <div className="text-content">
          <h1 className="text-h1">
            The Benefits of Collaborating with Virat Facility Management
          </h1>
          <p className="text-p">
            Here at{" "}
            {/* <Link to="/" className="links-on-text"> */}
              Virat Facility Management
            {/* </Link> */}
            , we pay keen attention to detail and ensure that we deliver only
            the best. Our staff is comprised of qualified personnel who are
            skilled in meeting all cleaning challenges and guaranteeing quality
            work. We work with the most advanced technology and eco-friendly
            products to meet the efficiency and sustainability of cleaning
            services.
          </p>
          <br />
        </div>
        <div className="image-content">
          <img src={homekeeping2} alt="homepage" className="second-image" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards">
          <ValuesCard
            image={card2}
            name={"Enhanced Productivity"}
            disc={
              "A clean environment contributes significantly to improving productivity in a workplace. It is always easier to concentrate on the work, produce more, and be more motivated when the place is clean. Our professional housekeeping services are meant to help create an environment conducive for your team."
            }
          />
          <ValuesCard
            image={card2}
            name={"Health and Safety"}
            disc={
              "It is essential to ensure that the working environment is clean for the well-being of the employees in the organization. Daily cleaning eliminates germs and allergens that can cause illnesses; this results in less absenteeism and a productive workforce. We are dedicated to employing non-toxic products that will safeguard your team and provide the necessary cleaning services."
            }
          />
          <ValuesCard
            image={card2}
            name={"Positive Impressions"}
            disc={
              "It is important to make a good first impression of oneself when potential clients and partners are visiting your office. A clean working environment also goes a long way in portraying the level of professionalism of a company or institution. Our corporate housekeeping services enable you to present your office in the best manner possible at all times."
            }
          />
        </div>
      </div>
      <div className="services-bottom-disc">
        <img src={boy} alt="" />
        <div className="servicesdisctxt">
          <h1 className="bottom-h1">
            Reach Out Today: Let's Keep Your Workspace Sparkling Clean
          </h1>
          <p>
            Are you ready to feel the difference that comes with a clean working
            environment?{" "}
            <Link to="/contact-us" className="links-on-text">
              Get in touch with us
            </Link>{" "}
            now to find out more about our cleaning services and how we can help
            you. Choose{" "}
            <Link to="/contact-us" className="links-on-text">
              Virat Facility Management
            </Link>{" "}
            as your ally in improving the quality of the workplace environment
            and productivity. Combined as one, we can take your office to new
            levels of cleanliness and organization.
          </p>
        </div>
        <img src={girl} alt="" />
      </div>{" "}
      <FAQ faqs={faqs} />
    </div>
  );
};

export default HouseKeeping;

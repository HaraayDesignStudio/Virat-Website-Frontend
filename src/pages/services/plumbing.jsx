import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homepageimage from "../../assets/service-back.png";
import homekeeping from "../../assets/service4.png";
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/elastrations/03.png";
import homekeeping2 from "../../assets/service42.png";
import boy from "../../assets/boy.png"
import girl from "../../assets/girl.png"
const Plumbing = () => {
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
    <div className="homepage-container services-details">
      <div className="image-container-homepage services-background">
        <img src={homepageimage} alt="homepage" />
        <div className="service-on-text serivce-two">
          <h1 className="change-2">Plumbing Services</h1>
          <p>
            At Virat Facility Management, we have realized the impact of the
            proper functioning of the plumbing systems in enhancing productivity
            and hygiene at workplaces. The variety of our professional plumbing
            services is aimed at maintaining your facilities without
            interrupting the operation and achieving exceptional results.  
          </p>
        </div>
      </div>
      <div className="services-first-box">
        <div className="text-content">
          <h1 className="text-h1">
            Reliable Plumbing Solutions for a Smooth-Running Workspace
          </h1>
          <p className="text-p">
            For all your plumbing requirements, whether it is service, repair,
            or installation, we guarantee you professional service delivery.
            <br />
          </p>
          <p className="text-h2">Excellence in Every Detail</p>
          <p className="text-p2">
            Each establishment has its specific requirements for plumbing
            systems, and we appreciate the need to meet them. Whether you need a
            simple drain cleaning or a large-scale installation, our industrial
            plumbing solutions offer customized solutions to your needs. We
            provide services that meet your timetable and financial ability to
            make sure that your plumbing systems are always in their optimal
            condition.
          </p>
        </div>
        <div className="image-content">
          <img src={homekeeping} alt="homepage" className="service-2-img" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards ">
          <ValuesCard
            image={card2}
            name={"Routine Maintenance"}
            disc={
              "The best way to avoid expensive repairs later is to take proactive measures that will help your plumbing systems last longer. Included in our regular maintenance services are inspection, cleaning, and preventive measures aimed at maintaining the optimal functionality of your plumbing systems. Maintenance enables one to detect any issues that may be present, hence allowing one to avoid having to spend a lot of money at a later date."
            }
          />
          <ValuesCard
            image={card2}
            name={"Emergency Repairs"}
            disc={
              "Any plumbing emergency will disrupt the normal flow of business in your company. We employ highly qualified plumbers who will fix the issue as soon as possible, thus preventing more damage and returning to normalcy as quickly as possible. We value our clients' time and needs with plumbing problems and ensure that we offer them quick and efficient plumbing repair services."
            }
          />
          <ValuesCard
            image={card2}
            name={"Installation and Upgrades"}
            disc={
              "When it comes to installation services or even the upgrade of a new facility, our professionals will make sure that your plumbing systems are installed to the best of standards. As our valued client, we assist you in choosing the most appropriate products that suit your requirements and ensure professional installation for maximum efficiency right from the onset."
            }
          />
        </div>
      </div>
      <div className="services-first-box second-box">
        <div className="text-content">
          <h1 className="text-h1">
            How does Virat Facility Management Assist in Optimizing Your
            Environment?
          </h1>
          <p className="text-p">
            Here at <Link to="/" className="links-on-text">Virat Facility Management</Link>, we pay keen attention to detail
            and ensure that we deliver only the best. Our staff is comprised of
            qualified personnel who are skilled in meeting all cleaning
            challenges and guaranteeing quality work. We work with the most
            advanced technology and eco-friendly products to meet the efficiency
            and sustainability of cleaning services.
          </p>
          <br />
        </div>
        <div className="image-content">
          <img src={homekeeping2} alt="homepage" className="second-image" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards service-two-cards">
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "At Virat Facility Management, we are precise and committed to delivering superior quality services every single time. Our professional plumbers have years of experience and knowledge in dealing with various plumbing issues, and every job is done professionally. Our company employs modern technology and proper procedures to ensure that our services are efficient as well as sustainable."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              " Optimum plumbing systems lead to low water usage, resulting in low operational costs. The services that we offer in the realm of plumbing aim to enhance the efficiency of your plumbing infrastructure in your workplace, hence making it cheaper and more friendly to the environment."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "It is important to know the details of your plumbing systems to avoid pitfalls when making a decision. The consultation services provided by our plumber service provider entail professional advice and guidance towards finding solutions that are suitable for your requirements and objectives."
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
          as your ally in improving the quality of the workplace environment and
          productivity. Combined as one, we can take your office to new levels
          of cleanliness and organization.
        </p> 

        </div>
      <img src={girl} alt="" />

      </div>
    </div>
  );
};

export default Plumbing;

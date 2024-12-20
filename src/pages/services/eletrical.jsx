import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homepageimage from "../../assets/service-back-2.png";
import homekeeping from "../../assets/service5.png";
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/elastrations/03.png";
import homekeeping2 from "../../assets/service51.png";
import boy from "../../assets/boy.png"
import girl from "../../assets/girl.png"
const Eletrical = () => {
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
          <h1 className="change-2">Electrical Services</h1>
          <p>
            At Virat Facility Management, we appreciate the importance of
            properly working electrical systems for the continuity of business
            operations. This is why our professional electrical services cover a
            wide spectrum to guarantee the safety, functionality, and code
            compliance of your workspace.
          </p>
        </div>
      </div>
      <div className="services-first-box">
        <div className="text-content">
          <h1 className="text-h1">
            Powering Your Success with Expert Electrical Services
          </h1>
          <p className="text-p">
            We are here to offer you the commercial electrical services that you
            require so that you can focus on running your business efficiently.
          </p>
          <br />
          <p className="text-h2">
            Your One-Step Solution for a Seamless Workspace
          </p>
          <p className="text-p2">
            Every business is unique, and so are its electrical requirements.
            That is why we provide detailed electrical maintenance services
            depending on the needs of your business or organization. 
            <br />
            <br />
            Our services range from routine checks and preventive maintenance to
            emergency services that guarantee your electrical systems are always
            in their peak condition. Ultimately, our goal is to offer the kind
            of solutions that can be integrated into your operational timetable
            and financial plan.
          </p>
        </div>
        <div className="image-content">
          <img src={homekeeping} alt="homepage" className="service-2-img" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards service-two-cards">
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Electrical maintenance should be carried out regularly to avoid any hitches in the functioning of the electrical systems. These maintenance services comprise examinations, checks, and actions aimed at preventing problems from arising in the first place or minimizing their severity. This not only optimizes your systems but also improves their durability, hence reducing the overall cost in the long run."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Electrical issues are generally unpredictable and can cause massive blackouts at times. Our team of professional electricians is always alert and waiting to attend to your emergency needs and ensure that your systems are back on quickly. We appreciate the importance of electrical issues and strive to keep downtime and disruption to a minimum and to return everything to normal as soon as possible."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Whether you are establishing a new office or improving already existing infrastructures, our installation and upgrade services help you achieve the best standards of electrical installation. We assist you in choosing the most suitable solutions for your requirements and offer professional installation to ensure the systems operate at peak efficiency from the very beginning."
            }
          />
        </div>
      </div>
      <div className="services-first-box second-box">
        <div className="text-content">
          <h1 className="text-h1">Here is what makes our services special:</h1>
          <p className="text-p">
            At{" "}
            <Link to="/" className="links-on-text">
              Virat Facility Management
            </Link>
            , we strongly believe in the principles of artistry and
            professionalism. The highly trained personnel at our company are
            fully committed to delivering efficient and sustainable electrical
            solutions with the help of state-of-the-art technology and methods.
            The electrical system is one of the most delicate to manage, and we
            are here to ensure you have all the help you need.
          </p>
          <br />
        </div>
        <div className="image-content">
          <img src={homekeeping2} alt="homepage" className="second-image" />
        </div>
      </div>
      <div className="service-cards-wrapper">
        <div className="values-card-one values-card-two service-cards service-two-cards service-only-two">
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Optimized electrical utilities play a significant role in minimizing energy usage and overall costs. Our electrical services ensure the efficiency and functionality of the electrical system in your workplace, thus enhancing cost-effectiveness."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              " Complying with electrical safety is crucial to any business. Our professional electricians know all the legal requirements and guarantee that your systems are compliant with these standards. Our company has vast experience that enables us to give professional advice and electrical consultation on the issues of compliance and the infrastructure of electrical needs."
            }
          />
          {/* <ValuesCard
          image={card2}
          name={""}
          disc={
            "It is important to know the details of your plumbing systems to avoid pitfalls when making a decision. The consultation services provided by our plumber service provider entail professional advice and guidance towards finding solutions that are suitable for your requirements and objectives."
          }
        /> */}
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

export default Eletrical;

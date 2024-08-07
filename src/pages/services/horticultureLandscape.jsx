import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import homepageimage from "../../assets/service-back.png";
import homekeeping from "../../assets/service2.png";
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/elastrations/03.png";
import homekeeping2 from "../../assets/service21.png";

const HorticultureLandscape = () => {
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
          <h1 className="change-2">Horticulture and Landscaping Maintenance</h1>
          <p>
            Welcome At Virat Facility Management, we understand that an exterior
            environment is an essential part of the organizational environment
            that supports productivity. Our horticultural services include full
            landscaping and gardening services aimed at improving the appearance
            and usability of your outdoor spaces, as well as giving your
            business a professional appeal.
          </p>
        </div>
      </div>
      <div className="services-first-box">
        <div className="text-content">
          <h1 className="text-h1">
            Taking Your Landscape and Horticultural Services to Another Level
          </h1>
          <p className="text-p">
            An aesthetically designed garden or courtyard greatly augments the
            appearance of the property, which would help create a good
            impression for the clients and visitors. Think of a beautiful lawn
            filled with gorgeous flowers that are not only pleasing to the eye
            but also provide your workspace with a rejuvenating environment. We
            offer professional landscaping services to design and maintain such
            a space, enhancing its beauty and functionality.
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
              "Landscaping can add much more value to the property if the work is well done and properly maintained. Clean and well-maintained lawns, flowers, and trees are appealing to potential customers, investors, and employees. Our garden landscaping services are aimed at making your area look beautiful and more valuable."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Quality design of the outdoor environment increases the morale of the employees and their productivity. People can relax and refresh their minds in green spaces, which are very effective in preventing stress. Our services in landscape and horticulture ensure that the environment looks and feels good to the body, mind, and soul."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Sustainability forms part of our core values in all projects that we undertake. We employ skilled horticulturists to plant and care for plants, flowers, and trees in our landscapes while promoting sustainable practices and using environmentally friendly products. Specializing in water-saving irrigation, we strive to design our landscapes to be environmentally friendly and able to withstand difficult conditions."
            }
          />
        </div>
      </div>
      <div className="services-first-box second-box">
        <div className="text-content">
          <h1 className="text-h1">
            Enhance the Natural Environment with the Assistance of Virat
            Facility Management
          </h1>
          <p className="text-p">
            At <Link to="/" className="links-on-text">Virat Facility Management</Link>, availing quality is guaranteed. It is
            a core value that defines our work. We pride ourselves on having
            experienced horticulturists and landscapers with passion and skills
            who will ensure your outdoors get the best care they need. It is our
            policy to ensure that we pay a lot of attention to minor details and
            produce high-quality work.
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
              "A clean environment contributes significantly to improving productivity in a workplace. It is always easier to concentrate on the work, produce more, and be more motivated when the place is clean. Our professional housekeeping services are meant to help create an environment conducive for your team."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "It is essential to ensure that the working environment is clean for the well-being of the employees in the organization. Daily cleaning eliminates germs and allergens that can cause illnesses; this results in less absenteeism and a productive workforce. We are dedicated to employing non-toxic products that will safeguard your team and provide the necessary cleaning services."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "It is important to make a good first impression of oneself when potential clients and partners are visiting your office. A clean working environment also goes a long way in portraying the level of professionalism of a company or institution. Our corporate housekeeping services enable you to present your office in the best manner possible at all times."
            }
          />
        </div>
      </div>
      <div className="services-bottom-disc services-bottom-disc-2 ">
        {/* <h1 className="bottom-h1">
          Reach Out Today: Let's Keep Your Workspace Sparkling Clean
        </h1> */}
        <p>
          Are you ready to change your exterior spaces with the help of our
          landscape and horticultural services? You can <Link to="/contact-us" className="links-on-text">reach out to us today</Link> to
          learn more about our extensive services and how we deliver customized
          solutions. 
        </p>
      </div>
    </div>
  );
};

export default HorticultureLandscape;

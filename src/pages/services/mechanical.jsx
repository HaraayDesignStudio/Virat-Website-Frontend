import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import homepageimage from "../../assets/service-back.png";
import homekeeping from "../../assets/service3.jpeg";
import ValuesCard from "../../components/valuesCard";
import card2 from "../../assets/elastrations/03.png";
import homekeeping2 from "../../assets/service31.png";

const MechanicalServices = () => {
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
          <h1 className="change-2">Mechanical Services</h1>
          <p>
            Welcome to Virat Facility Management – your one-stop solution for
            all mechanical services. We appreciate that many of your office
            needs require consistent and reliable equipment and machinery
            functioning so as not to disrupt the flow of business.   
          </p>
        </div>
      </div>
      <div className="services-first-box">
        <div className="text-content">
          <h1 className="text-h1">
            Ensuring Smooth Operations with Our Professional Mechanical Services
          </h1>
          <p className="text-p">
            Our mechanical services are an all-encompassing solution to ensure
            that your commercial space is well-maintained and functioning
            optimally – leaving you to focus on your enterprise.
            <br />
          </p>
          <p className="text-h2">Our Comprehensive Mechanical Services</p>
          <p className="text-p2">
            Just think about an office in which all mechanical systems work
            perfectly well, making it easy to conduct your operations. Clean and
            well-maintained equipment ensures that the associated assets will
            last longer and also reduces time wastage and disruptions. This is
            where Virat Facility Management comes in, offering mechanical
            solutions that will ensure the provision of a working environment.
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
              "Maintenance is an important aspect as it helps avoid breakdowns and can extend the life of the mechanical equipment. In our maintenance service, we perform regular checkups, thorough repairs if needed, and proper alignments to ensure your equipment runs as expected. It is far more effective to address a problem before it escalates into a larger issue that requires extensive repairs and time off from work."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Since mechanical problems are inevitable, it becomes crucial to address them before they progress further. Our professional technicians are well capable of responding to emergencies and getting your systems back online again. Our team is aware of the necessity of avoiding any interruptions in your business processes, so we make sure to offer you only fast and efficient services."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Whether you are starting with a new office space or retrofitting your existing office, our installation and upgrade services guarantee that all your mechanical systems are well-installed. Our team helps you choose the equipment and solutions that best suit your needs. Thus, we guarantee the optimum installation of the equipment to ensure that it operates at its capacity from the time it is installed."
            }
          />
        </div>
      </div>
      <div className="services-first-box second-box">
        <div className="text-content">
          <h1 className="text-h1">Join Hands with Virat Facility Management</h1>
          <p className="text-p">
            At Virat Facility Management, professionalism is implied in ensuring
            that every little detail is taken care of to the best of our
            ability. Our technicians are skilled, and we guarantee that they are
            equipped to deal with any mechanical issue and perform every task to
            perfection. This is done efficiently and sustainably by applying
            state-of-the-art technologies and industry best practices.
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
              " Mechanical systems that are well maintained consume less energy and therefore are cheaper to run. The mechanical solutions we offer are aimed at optimizing the performance of your equipment, increasing its uptime, and making your business more economical."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "It is essential to perform consistent maintenance and fix problems immediately to avoid system failures. The mechanical services we offer are professional to guarantee that your equipment stays usable and reliable to enhance the functioning of your business."
            }
          />
          <ValuesCard
            image={card2}
            name={""}
            disc={
              "Mechanical Systems Management is not solely confined to aspects of efficiency and reliability but also encompasses safety. Our services eliminate all risks and dangers that your employees may face in the workplace as we ensure equipment safety. With safety being a priority in everything we offer to you, you can be assured."
            }
          />
        </div>
      </div>
      <div className="services-bottom-disc services-bottom-disc-2 ">
        <h1 className="bottom-h1">
          Connect with Us: Your Route to Efficient Workflow Begins Here
        </h1>
        <p>
          Are you ready to make your office work easier through effective
          mechanical services? For detailed information about our wide portfolio
          of mechanical services, please do not hesitate to reach out to us
          today to capture how we can meet your requirements. 
        </p>
      </div>
    </div>
  );
};

export default MechanicalServices;

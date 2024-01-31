import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";
import card1 from "../assets/Rectangle 134.png";
import card2 from "../assets/Rectangle 134 (1).png";
import card3 from "../assets/Rectangle 134 (2).png";

const Service = () => {
  const navigate = useNavigate();
  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return (
    <>
      <div className="service-page-wrapper">
        <div className="service-page-container">
          <h1 className="service-heading">Our Services </h1>
          <hr className="hr-service" />
          <div className="service-details-container">
            <div className="serivce-details">
              <img src={card1} alt="image1" />
              <div className="details-service">
                <h1>Housekeeping solutions </h1>
                <p>
                  We offer our esteemed clients top-notch cleaning services that
                  combine the power of advanced machinery with the expertise of
                  skilled manpower. Our team of highly trained professionals is
                  dedicated to providing detailed and professional housekeeping
                  services that are customized to meet the unique needs of each
                  client. We take great pride in maintaining the highest
                  standards of cleanliness and hygiene, and we strive to ensure
                  that every aspect of your facility is impeccably maintained.
                  Our commitment to excellence and attention to detail make us
                  the preferred choice for clients seeking exceptional cleaning
                  solutions.
                </p>
              </div>
            </div>
            <div className="serivce-details">
              <img src={card2} alt="image2" />
              <div className="details-service">
                <h1>Mechanical, Electrical and Plumbing</h1>
                <p>
                  Virat Facility Management is a distinguished and eminent
                  provider of MEP services, catering to the diverse needs of
                  businesses and organizations. Our highly skilled professionals
                  possess extensive experience in the industry and are
                  thoroughly equipped to handle all aspects of mechanical,
                  electrical, and plumbing systems. We offer comprehensive
                  maintenance services, ensuring efficient and reliable
                  solutions for our esteemed clients. Our unwavering commitment
                  to excellence and dedication to exceeding our clients'
                  expectations is the hallmark of our services, delivered with
                  the highest level of professionalism and respect.
                </p>
              </div>
            </div>
            <div className="serivce-details">
              <img src={card3} alt="image3" />
              <div className="details-service">
                <h1>Horticulture and landscaping maintenance</h1>
                <p>
                  Virat specializes in providing premier gardening services to
                  distinguished organizations such as companies, societies, and
                  realty developers. Our highly skilled team excels in
                  transforming and maintaining the landscaping structure and
                  overview of outdoor areas. Our team recognizes that regular
                  maintenance is integral to a well-maintained garden. As such,
                  we offer comprehensive lawn care services, including mowing,
                  fertilization, weed control, and irrigation system management.
                  We pay meticulous attention to detail and are steadfast in our
                  commitment to delivering excellence, ensuring that your
                  landscape remains vibrant and healthy throughout the year. At
                  Virat Facility Management, we prioritize customer satisfaction
                  above all else. We are devoted to providing reliable and
                  efficient horticulture and landscape maintenance solutions.
                  Our team of experts is dedicated to creating magnificent
                  outdoor spaces while guaranteeing the highest quality service
                  delivery. You can entrust us with all your landscaping needs,
                  from creating stunning new gardens to maintaining existing
                  ones. Our unwavering goal is to exceed your expectations and
                  deliver our services with the utmost professionalism and
                  distinction. When we talk about maintenance, Maintenance isn’t
                  one thing but a combination of a bunch of things like
                  sustainability, and virat itself is taking steps towards
                  sustainability in different ways like
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="circular-cirle-white">
          <BsArrowDown />
        </div>
      </div>
      <div className="services-page-mobile">
        <div className="service-container-card">
          <img src={card1} alt="card1" />
          <p className="head-card-serivce">House Keeping</p>
          <p className="disc-card-serivce">
            We offer our esteemed clients top-notch cleaning services that
            combine the power of advanced machinery with the expertise of
            skilled manpower. Our team of highly trained professionals is
            dedicated to providing detailed and professional housekeeping
            services that are customized to meet the unique needs of each
            client.
            <span style={{ display: c1 ? "flex" : "none" }}>
              We take great pride in maintaining the highest standards of
              cleanliness and hygiene, and we strive to ensure that every aspect
              of your facility is impeccably maintained. Our commitment to
              excellence and attention to detail make us the preferred choice
              for clients seeking exceptional cleaning solutions.
            </span>
          </p>
          <p className="read-more" onClick={() => setC1(!c1)}>
            {c1 ? "Read less" : "Read more"}
          </p>
        </div>
        <div className="service-container-card">
          <img src={card2} alt="card1" />
          <p className="head-card-serivce">
            Mechanical, Electrical and Plumbing
          </p>
          <p className="disc-card-serivce">
            Virat Facility Management is a distinguished and eminent provider of
            MEP services, catering to the diverse needs of businesses and
            organizations. Our highly skilled professionals possess extensive
            experience in the industry and are thoroughly equipped to handle all
            aspects of mechanical, electrical, and plumbing systems. We offer
            comprehensive maintenance services, ensuring efficient
            <span style={{ display: c2 ? "flex" : "none" }}>
              {" "}
              and reliable solutions for our esteemed clients. Our unwavering
              commitment to excellence and dedication to exceeding our clients'
              expectations is the hallmark of our services, delivered with the
              highest level of professionalism and respect.
            </span>
          </p>
          <p className="read-more" onClick={() => setC2(!c2)}>
            {c2 ? "Read less" : "Read more"}
          </p>
        </div>
        <div className="service-container-card">
          <img src={card3} alt="card1" />
          <p className="head-card-serivce">House Keeping</p>
          <p className="disc-card-serivce">
            Virat specializes in providing premier gardening services to
            distinguished organizations such as companies, societies, and realty
            developers. Our highly skilled team excels in transforming and
            maintaining the landscaping structure and overview of outdoor areas.
            Our team recognizes that regular maintenance is integral to a
            well-maintained garden. As such, we offer comprehensive lawn care
            services, including mowing, fertilization, weed control, and
            irrigation system management.
            <span style={{ display: c3 ? "flex" : "none" }}>
              We pay meticulous attention to detail and are steadfast in our
              commitment to delivering excellence, ensuring that your landscape
              remains vibrant and healthy throughout the year. At Virat Facility
              Management, we prioritize customer satisfaction above all else. We
              are devoted to providing reliable and efficient horticulture and
              landscape maintenance solutions. Our team of experts is dedicated
              to creating magnificent outdoor spaces while guaranteeing the
              highest quality service delivery. You can entrust us with all your
              landscaping needs, from creating stunning new gardens to
              maintaining existing ones. Our unwavering goal is to exceed your
              expectations and deliver our services with the utmost
              professionalism and distinction. When we talk about maintenance,
              Maintenance isn’t one thing but a combination of a bunch of things
              like sustainability, and virat itself is taking steps towards
              sustainability in different ways like
            </span>
          </p>
          <p
            className="read-more"
            onClick={() => {
              setC3(!c3);
            }}
          >
            {c3 ? "Read less" : "Read more"}
          </p>
        </div>
      </div>
    </>
  );
};

export default Service;

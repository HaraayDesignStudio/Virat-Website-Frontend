// Service.js
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs";

const Service = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);
  const location = useLocation();
  console.log(location.state);
  const image = location.state.img;

  return (
    <div className="service-page-wrapper">
      <div className="service-page-container">
        <h1 className="service-heading">Our Services </h1>
        <hr className="hr-service" />
        <div className="service-details-container">
          <div className="serivce-details">
            <img src={image} alt="image1" />
            <div className="details-service">
              <h1>Housekeeping solutions </h1>
              <p>
                We offer our esteemed clients top-notch cleaning services that
                combine the power of advanced machinery with the expertise of
                skilled manpower. Our team of highly trained professionals is
                dedicated to providing detailed and professional housekeeping
                services that are customized to meet the unique needs of each
                client. We take great pride in maintaining the highest standards
                of cleanliness and hygiene, and we strive to ensure that every
                aspect of your facility is impeccably maintained. Our commitment
                to excellence and attention to detail make us the preferred
                choice for clients seeking exceptional cleaning solutions.
              </p>
            </div>
          </div>
          <div className="serivce-details">
            <img src={image} alt="image2" />
            <div className="details-service">
              <h1>Mechanical, Electrical and Plumbing</h1>
              <p>
                Virat Facility Management is a distinguished and eminent
                provider of MEP services, catering to the diverse needs of
                businesses and organizations. Our highly skilled professionals
                possess extensive experience in the industry and are thoroughly
                equipped to handle all aspects of mechanical, electrical, and
                plumbing systems. We offer comprehensive maintenance services,
                ensuring efficient and reliable solutions for our esteemed
                clients. Our unwavering commitment to excellence and dedication
                to exceeding our clients' expectations is the hallmark of our
                services, delivered with the highest level of professionalism
                and respect.
              </p>
            </div>
          </div>
          <div className="serivce-details">
            <img src={image} alt="image3" />
            <div className="details-service">
              <h1>Horticulture and landscaping maintenance</h1>
              <p>
                Virat specializes in providing premier gardening services to
                distinguished organizations such as companies, societies, and
                realty developers. Our highly skilled team excels in
                transforming and maintaining the landscaping structure and
                overview of outdoor areas. Our team recognizes that regular
                maintenance is integral to a well-maintained garden. As such, we
                offer comprehensive lawn care services, including mowing,
                fertilization, weed control, and irrigation system management.
                We pay meticulous attention to detail and are steadfast in our
                commitment to delivering excellence, ensuring that your
                landscape remains vibrant and healthy throughout the year. At
                Virat Facility Management, we prioritize customer satisfaction
                above all else. We are devoted to providing reliable and
                efficient horticulture and landscape maintenance solutions. Our
                team of experts is dedicated to creating magnificent outdoor
                spaces while guaranteeing the highest quality service delivery.
                You can entrust us with all your landscaping needs, from
                creating stunning new gardens to maintaining existing ones. Our
                unwavering goal is to exceed your expectations and deliver our
                services with the utmost professionalism and distinction. When
                we talk about maintenance, Maintenance isn’t one thing but a
                combination of a bunch of things like sustainability, and virat
                itself is taking steps towards sustainability in different ways
                like
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="circular-cirle-white">
        <BsArrowDown />
      </div>
    </div>
  );
};

export default Service;

// ContactUs.js
import React, { useEffect, useState } from "react";
import "./pages.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponents2 from "../components/buttonComponents2";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import { Helmet } from "react-helmet-async";
// API key
// https://virat-backend.onrender.com/

const ContactUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccessAlert, setIsSuccessAlert] = useState(false);
  const [isErrorAlert, setIsErrorAlert] = useState(false);
  const [errormsg, setErrormsg] = useState(
    "Submission failed. Please try again."
  );

  const handleSubmission = async (e) => {
    e.preventDefault();
console.log("hii")
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === ""
    ) {
      setErrormsg("Please fill in all required fields.");
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
      return;
    }

    const data = {
      name,
      email,
      number: phone,
      company,
      message,
    };

    try {
      await fetch("https://virat-backend.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setIsSuccessAlert(true);
      setTimeout(() => {
        setIsSuccessAlert(false);
        setTimeout(() => {
          navigate("/");
          window.scrollTo(0, 0);
        }, 1000);
      }, 2000);
    } catch (error) {
      setErrormsg("Network Error!");
      setIsErrorAlert(true);
      setTimeout(() => {
        setIsErrorAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="contact-container">    <Helmet>
        <title>We Are Here to Help You - Contact Us - VFMS</title>
        <meta name="description" content="Reach out to VFMS for any queries or assistance. Our dedicated support team is here to help you with all your needs. Contact us today for prompt support." />
      </Helmet>
      <div className="contact-first">
        <div>
          <p className="contact-heading">Contact us</p>
        </div>
        <div className="map-container">
      <iframe
        title="Map"
        className="responsive-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4482.987307807888!2d72.86167056498516!3d19.119586808955507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92eb66f0d3f%3A0x209e1cd3b5b0cb8c!2ssecure%201%20security%20service!5e0!3m2!1sen!2sin!4v1740985782963!5m2!1sen!2sin"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     
    </div>    
        <div>
          <p className="contact-discq">
          As a trusted provider of facility management services, we are dedicated to offer
customized and affordable pricing to meet the unique needs of our unique clients.
          </p>
          <div className="links-mobile">
          <a className="link-mobile"  href="https://wa.me/+919930233901" target="_blank"><IoLogoWhatsapp /></a>
            <Link className="link-mobile" to="https://www.linkedin.com/company/virat-facility-management-services/" target="_blank"><LiaLinkedinIn /></Link>
            <p className="link_phoneno">Phone : +91 9930233901</p>
          </div>
        </div>
      </div>
      <div className="links-mobile2">
      <a className="link-mobile"  href="https://wa.me/+919930233901" target="_blank"><IoLogoWhatsapp /></a>
            <Link className="link-mobile" to="https://www.linkedin.com/company/virat-facility-management-services/" target="_blank"><LiaLinkedinIn /></Link>  <p className="link_phoneno">Phone : +91 9930233901</p>
         
          </div>
      <div>
        <form className="form-contact">
          <div className="input-contact">
            <input
              type="text"
              id="textInput"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
            <div className="hr-input"></div>
          </div>
          <div className="input-contact">
            <input
              type="email"
              id="textInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <div className="hr-input"></div>
          </div>
          <div className="input-contact">
            <input
              type="text"
              id="textInput"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company name"
            />
            <div className="hr-input"></div>
          </div>
          <div className="input-contact">
            <input
              type="number"
              id="textInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone no."
            />
            <div className="hr-input"></div>
          </div>
          <div className="input-contact message-input">
            <input
              type="text"
              id="textInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <div className="hr-input"></div>
          </div>
          
          <ButtonComponents2 name={"Submit now"} onClickFun={handleSubmission} />

        </form>
      </div>
      {isSuccessAlert && (
        <section className="alertContainer alertSuccess slideIn">
          Successfully submitted!
        </section>
      )}
      {isErrorAlert && (
        <section className="alertContainer alertError slideIn">
          {errormsg}
        </section>
      )}
    </div>
  );
};

export default ContactUs;

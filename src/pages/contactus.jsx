// ContactUs.js
import React, { useEffect, useState } from "react";
import "./pages.css";
import { Link, useNavigate } from "react-router-dom";
import ButtonComponents2 from "../components/buttonComponents2";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";

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
    <div className="contact-container">
      <div className="contact-first">
        <div>
          <p className="contact-heading">Contact us</p>
        </div>
        <div>
          <p className="contact-disc">
            If you have any inquiry get in touch with us. We’ll be happy to help
            you
          </p>
          <div className="links-mobile">
            <Link className="link-mobile" to="/"><IoLogoWhatsapp /></Link>
            <Link className="link-mobile" to="/"><LiaLinkedinIn /></Link>
          </div>
        </div>
      </div>
      <div className="links-mobile2">
            <Link className="link-mobile" to="/"><IoLogoWhatsapp /></Link>
            <Link className="link-mobile" to="/"><LiaLinkedinIn /></Link>
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
          <ButtonComponents2 name={"Submit now"} link={handleSubmission} />
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

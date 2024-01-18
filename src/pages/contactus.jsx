// ContactUs.js
import React, { useState } from "react";
import "./pages.css";
import { Link } from "react-router-dom";
import ButtonComponents2 from "../components/buttonComponents2";

// API key
// https://virat-backend.onrender.com/

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-container">
      <div className="contact-first">
        <div>
          <p className="contact-heading">Contact us</p>
        </div>
        <div>
          <p className="contact-disc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever{" "}
          </p>
          <div className="links-mobile">
            <Link className="link-mobile" to="/"></Link>
            <Link className="link-mobile" to="/"></Link>
          </div>
        </div>
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
              type="text"
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
          <div className="input-contact">
            <input
              type="text"
              id="textInput"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
            />
            <div className="hr-input"></div>
          </div>
         <ButtonComponents2 name={"Explore now"} link={""}/>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

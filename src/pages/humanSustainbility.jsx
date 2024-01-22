import React from "react";
import "./pages.css";
import img2 from "../assets/126276-abstract-3d-orange-black-and-white-curved-lines-texture-background 1 (1).png";
import { BsArrowUp } from "react-icons/bs";

const HumanSustainbility = () => {
  return (
    <div className="sustain-wrapper">
      <div className="heading-sustain">
        <p className="heading-text-sustain">Human Sustainability </p>
        <p className="disc-text-sustain">
          Virat facility management services are based on teamwork. At virat we
          encourage and believe in equality, unity and value for all. Human
          sustainability is important for overall Growth of the company. Virat
          Facility Management is a company that recognizes the importance of
          human sustainability. By taking care of its employees and promoting a
          healthy work-life balance, Virat Facility Management ensures that its
          workforce is productive and motivated.
        </p>
      </div>
      <div className="images-sustain">
        <img src={img2} alt="sustain" />
        <img src={img2} alt="sustain" />
      </div>
      <div className="next-part-sustain">
        <p className="sustain-how">And how do we do it ?</p>
        <div className="sustain-circular-button">
          <BsArrowUp />
        </div>
      </div>
    </div>
  );
};

export default HumanSustainbility;

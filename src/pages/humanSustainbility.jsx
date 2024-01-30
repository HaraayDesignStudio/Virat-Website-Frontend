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
          encourage and believe in equality ,unity and value for all. Human
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
      <div className="sustain-main-disc">
        <p>
        Our enterprise acknowledges that our triumph is indebted to the
        unstinting patronage of the community, and hence we are devoted to
        reciprocating that support in manifold ways. We offer a gamut of
        services such as maintenance and cleaning, fundraising for
        non-governmental organizations, sponsorships, scholarships, investments
        in local public projects, and more. Our ambition transcends merely
        becoming a preeminent brand in facility management services. We aspire
        to set a standard for others by promoting sustainability. We endeavor to
        disseminate awareness about the paramount importance of sustainability
        and its pervasive impact on individuals, corporations, and the
        environment. By espousing sustainability through multifarious means, we
        seek to instigate businesses and individuals to work towards human
        sustainability, growth, opportunity, and parity. We adopt measures to
        preserve the environment and devise enduring solutions that will
        bequeath benefits to posterity. Furthermore, our enterprise partakes in
        community service initiatives unequivocal manifestation of our
        unwavering commitment to human sustainability. Virat Facility
        Management's dedication to human sustainability is exemplified by its
        unwavering focus on customer satisfaction. The company prides itself on
        thoroughly comprehending the needs and expectations of its customers,
        and consistently providing superlative services that meet and exceed
        those expectations. This approach cultivates an exceptional experience
        for customers, resulting in augmented loyalty and repeat patronage. 
        <br /><br />In
        addition, Virat Facility Management's commitment to human sustainability
        extends beyond its employees, as it strives to contribute towards the
        betterment of society as a whole. The company values its employees with
        the same level of esteem as its clients, as it recognizes that
        successful companies are built upon a foundation of successful
        employees.
        </p>
      </div>
    </div>
  );
};

export default HumanSustainbility;

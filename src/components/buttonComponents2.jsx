import React from "react";
import "../pages/pages.css";

const ButtonComponents2 = ({ name, link }) => {
  return (
    <div className="button-for-landing button-for-landing-two" onClick={link}>
      {name}
    </div>
  );
};

export default ButtonComponents2;

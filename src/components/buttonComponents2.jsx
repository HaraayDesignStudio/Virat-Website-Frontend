import React from "react";
import "../pages/pages.css";

const ButtonComponents2 = ({ name, link }) => {
  const handleClick = () => {};
  return (
    <div className="button-for-landing button-for-landing-two" onClick={handleClick}>
      {name}
    </div>
  );
};

export default ButtonComponents2;

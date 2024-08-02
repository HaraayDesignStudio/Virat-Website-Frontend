import React from "react";

const ButtonCom = ({ name, link }) => {
  return <div className="button-for-landing" onClick={link}>{name}</div>;
};

export default ButtonCom;

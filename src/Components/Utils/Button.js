import React from "react";
import "./Utils.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

const onClick = () => {
  window.location.href = "/front/PublicMatches/PublicMatches.html";
};

const Button = ({ children, type, buttonStyle, buttonSize }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={() => onClick()}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;

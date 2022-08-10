import React from "react";
import "./Utils.css";

const FlexWrapper = (props) => {
  return (
    <div className="main-wrapper">
      <div className="main-wrapper__content">{props.children}</div>
    </div>
  );
};

export default FlexWrapper;

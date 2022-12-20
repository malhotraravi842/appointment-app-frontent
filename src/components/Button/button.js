import React from "react";

const Button = (props) => {
  return (
    <button className="custom__btn" {...props}>
      {props.children}
    </button>
  );
};

export default Button;

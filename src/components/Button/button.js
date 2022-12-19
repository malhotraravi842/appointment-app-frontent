import React from "react";

const Button = ({ label, type, onClick }) => {
  return (
    <button className="custom__btn" type={type} onClick={() => onClick()}>
      {label}
    </button>
  );
};

export default Button;

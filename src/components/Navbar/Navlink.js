import React from "react";
import { Link } from "react-router-dom";

const Navlink = ({ label, path }) => {
  return (
    <Link className="navbar__navlink" to={path}>
      {label}
    </Link>
  );
};

export default Navlink;

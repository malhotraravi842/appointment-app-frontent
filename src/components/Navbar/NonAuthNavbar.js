import React from "react";
import Navlink from "./Navlink";
import { useLocation } from "react-router-dom";

const NonAuthNavbar = () => {
  let path = useLocation().pathname;
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Navlink label="QuickAppoint" path="/" />
      </div>
      <div className="navbar__navlist">
        {path !== "/" && <Navlink label="Login" path="/" />}
        {path !== "/register" && <Navlink label="Register" path="/register" />}
      </div>
    </div>
  );
};

export default NonAuthNavbar;

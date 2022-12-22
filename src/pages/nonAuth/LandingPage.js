import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page__container">
        <div className="landing-page__title">Grow with QuickAppoint</div>
        <div className="landing-page__subtitle">
          Manage all your appointments at one place.
        </div>
        <Link className="landing-page__register" to="/org/register">
          <Button type="button">Register</Button>
        </Link>
      </div>
      <div className="landing-page__container">
        <div className="landing-page__title">Save time with QuickAppoint</div>
        <div className="landing-page__subtitle">
          No need to stand in a big queue, solve your medical needs using
          QuickAppoint.
        </div>
        <Link className="landing-page__register" to="/user/register">
          <Button type="button">Sign up & Book</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;

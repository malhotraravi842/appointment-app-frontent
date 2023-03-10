import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import Navlink from "./Navlink";

const AuthNavbar = (props) => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <Navlink label="QuickAppoint" path="/" />
      </div>
      <div className="navbar__navlist">
        <div className="navbar__navlink" onClick={() => props.logoutUser()}>
          Sign Out
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default compose(connect(null, mapDispatchToProps))(AuthNavbar);

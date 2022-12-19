import { Fragment } from "react";
import { AuthNavbar, NonAuthNavbar } from "./components/Navbar";
import { AuthRouter, NonAuthRouter } from "./router";
import { compose } from "redux";
import { connect } from "react-redux";
import "./styles/main.scss";

const App = ({ isLoggedIn }) => {
  return (
    <Fragment>
      {isLoggedIn ? <AuthNavbar /> : <NonAuthNavbar />}
      <div className="container">
        {isLoggedIn ? <AuthRouter /> : <NonAuthRouter />}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default compose(connect(mapStateToProps))(App);

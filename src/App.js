import { Fragment, useState } from "react";
import { AuthNavbar, NonAuthNavbar } from "./components/Navbar";
import { AuthRouter, NonAuthRouter } from "./router";
import "./styles/main.scss";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Fragment>
      {isLoggedIn ? <AuthNavbar /> : <NonAuthNavbar />}
      <div className="container">
        {isLoggedIn ? <AuthRouter /> : <NonAuthRouter />}
      </div>
    </Fragment>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/auth";

const AuthRouter = () => (
  <Routes>
    <Route exact path="/" element={<Dashboard />} />
  </Routes>
);

export default AuthRouter;

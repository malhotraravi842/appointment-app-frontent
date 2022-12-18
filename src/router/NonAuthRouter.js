import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/nonAuth";

const NonAuthRouter = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
  </Routes>
);

export default NonAuthRouter;

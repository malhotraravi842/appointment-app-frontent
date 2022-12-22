import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register, LandingPage } from "../pages/nonAuth";

const NonAuthRouter = () => (
  <Routes>
    <Route exact path="/" element={<LandingPage />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
  </Routes>
);

export default NonAuthRouter;

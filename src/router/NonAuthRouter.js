import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login, Register } from "../pages/nonAuth";

const NonAuthRouter = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
  </Routes>
);

export default NonAuthRouter;

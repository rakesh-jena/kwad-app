import React from "react";
import "./Style/Auth.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import PageNotFound from "./404";
import ConfirmEmail from "./Views/Auth/ConfirmEmail";
import Dashboard from "./Views/Layouts/Homepage";

const URL = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default URL;

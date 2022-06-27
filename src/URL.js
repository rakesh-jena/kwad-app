import React from "react";
import "./Style/Auth.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import Login from "./Views/Auth/Login";
import PostSignUp from "./Views/Auth/PostSignUp";
import PageNotFound from "./404";

const URL = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/postSignUp" element={<PostSignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};

export default URL;

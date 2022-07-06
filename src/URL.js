import React from "react";
import "./Style/Auth.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import PageNotFound from "./404";
import ConfirmEmail from "./Views/Auth/ConfirmEmail";
import Dashboard from "./Views/Pages/Dashboard";

const URL = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/confirm-email" element={<ConfirmEmail />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
          
        
      </Routes>
    </BrowserRouter>
  );
};

export default URL;

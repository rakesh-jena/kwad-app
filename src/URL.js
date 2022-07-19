import React from "react";
import "./Style/Auth.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./Views/Auth/ForgotPassword";
import Login from "./Views/Auth/Login";
import Register from "./Views/Auth/Register";
import PageNotFound from "./404";
import ConfirmEmail from "./Views/Auth/ConfirmEmail";
import Dashboard from "./Views/Pages/Dashboard";
import Profile from "./Views/Pages/Profile";
import Settings from "./Views/Pages/Settings";
import Message from "./Views/Pages/Message";
import Notification from "./Views/Pages/Notification";
import ViewProfile from "./Views/Pages/ViewProfile";

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
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/settings" element={<Settings/>}/>  
        <Route path="/message" element={<Message/>}/>
        <Route path="/notifications" element={<Notification/>}/>
        <Route path="/view-profile" element={<ViewProfile/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default URL;

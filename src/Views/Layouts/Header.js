import React, { useState } from "react";
import "./Header.scss";
import { useLocation } from 'react-router-dom';
import { InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";
import LogoB from "../../Images/Logo/logo_blue.png";
import filterIcon from "../../Images/filter.png";
import Sidebar from "./Sidebar";


const Header = (props) => {
  console.log(props.displayIcons);
  const location = useLocation();
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div className="dashboardMain--Header">
      {props.displayIcons ? (
        <div className="dashboardMain--Header--LogoDiv">
          <img
            src={LogoB}
            alt="kwad-logo"
            className="dashboardMain--Header--LogoDiv--Logo"
          />
        </div>
      ) : (
        <></>
      )}
      {location.pathname === "/dashboard" ? (
        <div
          className={
            props.displayIcons
              ? "dashboardMain--Header--Search--NavClose"
              : "dashboardMain--Header--Search--NavOpen"
          }
        >
          <div className="searchIcon">
            <Search className="dashboardMain--Header--SearchIcon" />
          </div>
          <InputBase
            placeholder="Search"
            classes={{
              root: "inputRoot",
              input: "inputInput",
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onClick={() => {
              console.log("Hello");
            }}
          />
        </div>
      ) : (
        <></>
      )}

      {props.displayIcons ? <Sidebar displayIcons={true} /> : <></>}
      {props.displayIcons || location.pathname === "/dashboard" ? (
        <div className="dashboardMain--Header--FilterDiv">
          <img
            src={filterIcon}
            alt="filter--icon"
            className="dashboardMain--Header--FilterDiv--Icon"
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;

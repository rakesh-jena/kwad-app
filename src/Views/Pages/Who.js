import ArrowLeftRounded from "@mui/icons-material/ArrowLeftRounded";
import { IconButton } from "@mui/material";
import React from "react";

export default function OptionDesc(props) {
    return (
        <div className="">
            <img className="logo" src="" alt="logo"/>
            <h1></h1>
            <h6></h6>
            <h6></h6>
            <div className="option">
                <div className="box">
                    <p></p>
                </div>
                <div className="box">
                    <p></p>
                </div>
                <div className="box">
                    <p></p>
                </div>
            </div>
            <IconButton>
                <ArrowLeftRounded/>
            </IconButton>
        </div>
    );
}
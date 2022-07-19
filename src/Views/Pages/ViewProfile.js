import { Avatar, Button, Container, Grid } from "@mui/material";
import React from "react";
import "./ViewProfile.scss";
import pinImg from "../../Images/photo1.jfif"
import Project from "../Components/Project";
import userPic from "../../Images/userPic.png";
import userCover from "../../Images/userProf.png";
import LogoWhite from "../../Images/Logo/logo_white.png";

export default function ViewProfile () {
    return (
        <div className="viewProfile">
            <div className="mainHeader">
                <img src={LogoWhite} alt="logo"/>
            </div>
            <div className="mainContainer">
                <Container>
                    <div className="vp-header">
                        <div className="left-block">
                            <Avatar src={userPic} alt="Avatar"/>
                            <div className="details">
                                <h4>Trevor Williom</h4>
                                <h6>Designation</h6>
                            </div>
                            
                        </div>
                        <div className="right-block">
                            <Button>Hire</Button>
                            <Button>Like</Button>
                            <Button>Save</Button>
                        </div>
                    </div>
                    <div className="vp-container">
                        <div className="vp-cover">
                            <img src={userCover} alt="cover"/>
                        </div>
                        <div className="vp-desc">
                            <h3>About</h3>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="vp-divider"></div>
                        <div className="vp-explore">
                            <div className="vp-explore-header"></div>
                            <div className="vp-explore-works">
                                <Grid container>
                                    <Grid item md={3} sm={4}>
                                        <Project url={pinImg} rating={2} title="Demo"/>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
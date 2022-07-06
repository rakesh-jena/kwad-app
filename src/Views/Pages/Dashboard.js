import React, { useContext } from "react";
import Pin from "../Components/Pin";
import Page from "../Layouts/Page";
import { pins } from "./pins";
import pinImg from "../../Images/photo1.jfif"
import { Grid } from "@mui/material";

export default function Dashboard () {
    return (
        <Page>
            <Grid container  spacing={1} p={1} className="dashboard">
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
                <Grid item md={3} sm={4}  className="dashboardContent">          
                    <Pin url={pinImg}/>          
                </Grid>
            </Grid>
        </Page>
      );
}
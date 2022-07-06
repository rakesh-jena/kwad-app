import React, { useContext } from "react";
import Pin from "../Components/Pin";
import Page from "../Layouts/Page";
import pinImg from "../../Images/photo1.jfif"
import { Grid } from "@mui/material";

export default function Dashboard () {
    const loop = index => {
        let content = [];
        for (let i = 0; i < index; i++) {
          content.push(
            <Grid key={i} item md={3} sm={4}  className="dashboardContent">          
                <Pin url={pinImg} rating={2} title="Demo"/>          
            </Grid>
            );
        }
        return content;
      };
    return (
        <Page scroll={true} searchBar={true}>
            <Grid container  spacing={1} p={1} className="dashboard">
                {loop(20)}
            </Grid>
        </Page>
      );
}
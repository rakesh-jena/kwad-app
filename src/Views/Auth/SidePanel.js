import React from "react";
import { Paper, Box } from '@mui/material';
import LogoWhite from "../../Images/Logo/logo_white.png";

export default class SidePanel extends React.Component {
    render(){
        return (
            <Paper elevation={0} rounded className="left-panel"
            sx={{
                bgcolor: '#023246',
                color: '#f6f6f6',
                borderRadius: '20px',
            }}>
                <img src={LogoWhite} alt="logo" className="kwadLogo"/>
            </Paper>
        );
    } 
}

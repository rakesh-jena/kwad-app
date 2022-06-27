import React from "react";
import { Paper, Box } from '@mui/material';
import LogoWhite from "../../Images/Logo/logo_white.png";
import Login from "./Login";

export default class Auth extends React.Component {
    render(){
        return (
            <Box>
            <Paper elevation={0} rounded className="left-panel"
            sx={{
                bgcolor: '#023246',
                color: '#f6f6f6',
                margin: '20px',
                borderRadius: '20px',
                padding: '10px',
                height: '100%',
            }}>
                <img src={LogoWhite} alt="logo" className="kwadLogo" />
            </Paper>
            <Login/>
            </Box>
        );
    } 
}

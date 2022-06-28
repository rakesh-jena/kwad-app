import { Grid, Paper, Box, Divider, Button } from "@mui/material";
import React from "react";
import LogoWhite from "../../Images/Logo/logo_white.png";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
    return (
        <Paper elevation={0}
        sx={{
            bgcolor: '#023246',
            color: '#f6f6f6',
            borderRadius: '20px',
            height: 'calc(100vh - 48px)',
            m:'24px'
        }}>
            <Grid container p={3} sx={{position:'relative',top:'50%',transform:'translateY(-50%)',height:'100%'}}>
                <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' },m:'auto'
                 }}>
                    <img src={LogoWhite} alt="logo" className="kwadLogo"/>
                </Grid>
                <Grid item md={4} sm={6} xs={12} >
                    <Paper sx={{borderRadius:'10px',height:'100%'}}>
                        <Box sx={{height:'calc(100% - 180px)',bgcolor:'#287194',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',
                        p:'20px',color:'#f1f1f1'}}>
                            <span className="pageTitle" style={{color:"white",marginTop:'40px'}}>Sign up</span>
                            <h4>
                                Confirm your Email
                            </h4>
                            <p>
                                Please check your inbox for a confirmation email. Click the link in the email to confirm your email.
                            </p>
                            <Divider sx={{bgcolor:'white',mb:3}}/>
                            <Link to="/forgot-password" className="link" style={{color:'lightgrey',fontSize:'18px'}}>
                                Resend email
                            </Link>                            
                        </Box>
                        <Box sx={{height:'100px',bgcolor:'#a3d1e7',p:'20px', mb:'20px',
                        borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'
                        }}>
                            <Link to="/" className="link" style={{color:'grey',fontSize:'18px'}}>
                                Already have an account?
                            </Link>
                        </Box>
                    </Paper>                    
                </Grid>
            </Grid>
        </Paper>
    );
  };
  
  export default ConfirmEmail;
import { Grid, Paper, Box, Divider, Button } from "@mui/material";
import React from "react";
import LogoWhite from "../../Images/Logo/logo_white.png";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
    return (
        <Paper elevation={0} className="slideRight"
        sx={{
            bgcolor: '#023246',
            color: '#f6f6f6',
            borderRadius: '20px',
            height: 'calc(100vh - 48px)',
            m:'24px'
        }}>
            <Grid container p={3} sx={{position:'relative',top:'50%',transform:'translateY(-50%)',height:'100%'}}>
                <Grid item md={9} sm={6} sx={{ display: { xs: 'none', sm:'block' }
                 }}>
                    <img src={LogoWhite} alt="logo" className="kwadLogo" style={{width:'80px'}}/>
                </Grid>
                <Grid item md={3} sm={6} xs={12} className="slideUp">
                    <Paper sx={{borderRadius:'10px',height:'100%'}}>
                        <Box sx={{height:'calc(100% - 145px)',bgcolor:'#287194',borderTopLeftRadius:'10px',borderTopRightRadius:'10px',
                        p:'20px',color:'#f1f1f1'}}>
                            <span className="pageTitle" style={{color:"white",marginTop:'40px'}}>Sign up</span>
                            <h4>
                                Confirm your Email
                            </h4>
                            <p style={{color:"#d4d4ce"}}>
                                Please check your inbox for a confirmation email. Click the link in the email to confirm your email.
                            </p>
                            <Divider sx={{bgcolor:'white',mb:3}}/>
                            <Link to="/forgot-password" className="link" style={{color:'#a3d1e7',fontSize:'15px'}}>
                                Resend email
                            </Link>                            
                        </Box>
                        <Box sx={{bgcolor:'#a3d1e7',p:'65px 20px 20px 20px',
                        borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px'
                        }}>
                            <Link to="/" className="link" style={{color:'#023246',fontSize:'15px'}}>
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
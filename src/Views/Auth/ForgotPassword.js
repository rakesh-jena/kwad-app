import { React, useState } from "react";
import SidePanel from "./SidePanel";
import { useNavigate } from "react-router-dom";
import { Paper, Button, FormControl, FilledInput, Divider, Grid, InputLabel, Box } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

const ForgotPassword = (props) => {
  return (
    <Grid container spacing={5} p={3} className="auth-wrapper">
      <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' } }}>
        <SidePanel/>
      </Grid>
      <Grid item md={4} sm={6} xs={12} className="fade">
        <ForgotPasswordForm/>  
      </Grid>
    </Grid>
  );
};

const ForgotPasswordForm = () => {
    let history = useNavigate();
    const [userData, setUserData] = useState({ email: ""});
    const handleInputChange = (e) => {
      setUserData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    };
    return (
      <Paper elevation={0} sx={{bgcolor:'transparent',position:'relative',top:'50%',transform:'translateY(-50%)',maxWidth:'90%',m:'auto'}}>
          <Button sx={{border:'2px solid #d3d4ce',mb:2,p:'15px',borderRadius:'10px',minWidth:'24px',
              "&.MuiButtonBase-root:hover": {
                borderColor:'#287194',".MuiSvgIcon-root":{color:'#a3d1e7',}
              }
            }}
            onClick={() => history(-1)}
          >
            <ArrowBackIosNew  sx={{fontSize:"0.8rem",color:'#d3d4ce'}}/>
          </Button>
          <Box>
            <span className="pageTitle">Forgot password?</span>
          </Box>
          <Box>
            <p className="forgotPasswordForm--Paper--Instructions">
              Enter the email address you used when you joined and we’ll send you
              instructions to reset your password.
            </p>
          </Box>
  
          <Divider sx={{mb:3}} />
          <div className="messageBox">
            <p className="messageBox--Text">
              If this email address was used to create an account, instructions to
              reset your password will be sent to you. Please check your email.
            </p>
          </div>
          <FormControl fullWidth variant="filled" sx={{mb:3}}>
            <FilledInput 
              size="small"
              disableUnderline
              id="input-email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <Button className="form--Button" variant="contained" color="primary">
            Send Rest Instructions
          </Button>
        </Paper>
    );
  };

export default ForgotPassword;

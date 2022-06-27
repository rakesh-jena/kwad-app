import React from "react";
import SidePanel from "./SidePanel";
import { useNavigate } from "react-router-dom";
import { Paper, Button, FormControl, TextField, Divider } from "@mui/material";
import { ArrowBackIosNew } from "@mui/icons-material";

const ForgotPassword = (props) => {
  return (
    <div className="forgotPassword">
      <div className="forgotPassword--Left">
        <SidePanel />
      </div>
      <div className="forgotPassword--Recover">
        <ForgotPasswordForm/>  
      </div>
    </div>
  );
};

const ForgotPasswordForm = () => {
    let history = useNavigate();
    return (
      <div className="forgotPasswordForm">
        <Paper elevation={0} className="forgotPasswordForm--Paper">
          <Button
            className="forgotPasswordForm--Paper--Back"
            onClick={() => history.goBack()}
          >
            <ArrowBackIosNew className="forgotPasswordForm--Paper--Back--ArrorBackIcon" />
          </Button>
          <div className="forgotPasswordForm--Paper--Title">
            <span className="pageTitle">Forgot password?</span>
          </div>
          <div className="forgotPasswordForm--Paper--InstructionsDiv">
            <p className="forgotPasswordForm--Paper--Instructions">
              Enter the email address you used when you joined and we’ll send you
              instructions to reset your password.
            </p>
          </div>
  
          <Divider className="forgotPasswordForm--Paper--Divider" />
          <div className="messageBox">
            <p className="messageBox--Text">
              If this email address was used to create an account, instructions to
              reset your password will be sent to you. Please check your email.
            </p>
          </div>
          <div className="forgotPasswordForm--Paper--FormControlDiv">
            <FormControl className="forgotPasswordForm--Paper--FormControl">
              <TextField
                id="outlined-textarea"
                placeholder="Email"
                multiline
                className="form--TextField"
              />
            </FormControl>
          </div>
          <Button className="form--Button" variant="contained" color="primary">
            Send Rest Instructions
          </Button>
        </Paper>
      </div>
    );
  };

export default ForgotPassword;

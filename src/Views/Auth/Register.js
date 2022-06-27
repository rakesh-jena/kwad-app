import React from "react";
import SidePanel from "./SidePanel";
import CustomPasswordField from "./CustomPasswordField";
import { TextField, FormControl, Button } from "@mui/material";

const Register = (props) => {
  return (
    <div className="register">
      <SidePanel/>
      <RegisterForm />
    </div>
  );
};

const RegisterForm = () => {
    // const handleInputChange = (e) => {
    //   setUserData((prevState) => {
    //     return {
    //       ...prevState,
    //       [e.target.name]: e.target.value,
    //     };
    //   });
    // };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      window.location.pathname = "/confirmemail";
    };
  
    const getPassword = (password) => {
      console.log(password);
    };
  
    return (
      <div className="registerForm">
        <div className="registerForm--TextFieldDiv">
          <FormControl className="registerForm--FormControl">
            <TextField
              id="outlined-textarea"
              placeholder="First Name"
              multiline
              className="form--TextField"
            />
          </FormControl>
          <FormControl className="registerForm--FormControl">
            <TextField
              id="outlined-textarea"
              placeholder="Last Name"
              multiline
              className="form--TextField"
            />
          </FormControl>
        </div>
        <div className="registerForm--TextFieldDiv">
          <FormControl className="registerForm--TextFieldDiv--PhoneExtend">
            <TextField
              id="outlined-textarea"
              placeholder="+91"
              multiline
              className="form--TextField"
            />
          </FormControl>
          <FormControl className="registerForm--TextFieldDiv--PhoneNumber">
            <TextField
              id="outlined-textarea"
              placeholder="Contact Number"
              multiline
              className="form--TextField"
            />
          </FormControl>
        </div>
        <div className="registerForm--TextFieldDiv">
          <FormControl className="registerForm--TextFieldDiv--Extra">
            <TextField
              id="outlined-textarea"
              placeholder="Email"
              multiline
              className="form--TextField"
            />
          </FormControl>
        </div>
        <div className="registerForm--Password">
          <CustomPasswordField getPasword={getPassword} />
        </div>
        <Button
          className="form--Button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </div>
    );
  };

export default Register;

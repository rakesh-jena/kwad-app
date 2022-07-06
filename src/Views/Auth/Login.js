import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FilledInput, Button, FormControl, Grid, InputLabel, Box } from "@mui/material";
import CustomPasswordField from "./CustomPasswordField";
import SidePanel from "./SidePanel";
import Heading from "./Heading";

const Login = () => {
  const [formSubmit, submitForm] = useState(true);
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ for: "", value:"" });

  // console.log("auth", localStorage.getItem("isAuthenticated"));

  console.log(userData.username);
  console.log(userData.password);

  const handleInputChange = (e) => {
    if(!formSubmit){
      if(errorMessage.for === e.target.name && e.target.value != null){
        setErrorMessage((prevState) => ({
          value: "",
          for: ""
        }));
      }
      if(errorMessage.for === "both" || errorMessage.for === "cred_err"){
        setErrorMessage((prevState) => ({
          value: "",
          for: ""
        }));
      }
    }
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(false);
    //if username or password field is empty, return error message
    if (
      userData.username === "" &&
      userData.password === ""
    ) {
      setErrorMessage((prevState) => ({
        value: "Enter username/email & password to Sign In",
        for: "both"
      }));
    } else if (userData.username === "") {
      setErrorMessage((prevState) => ({
        value: "Enter username/email to Sign In",
        for: "username"
      }));
    } else if (userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "We can’t let you sign in without your Password",
        for: "password"
      }));
    } else if (
      userData.username === "admin" &&
      userData.password === "123456"
    ) {
      //Signin Success
      localStorage.setItem("isAuthenticated", "true");
      window.location.pathname = "/dashboard";
    } else {
      //If credentials entered is invalid
      setErrorMessage((prevState) => ({
        for:"cred_err",
        value:
          "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.",
      }));
    }
  };

  const getPassword = (password) => {
    if(!formSubmit){
      if(password != null && errorMessage.for === "password"){
        setErrorMessage((prevState) => ({
          value: "",
          for: ""
        }));
      }
    }   
    setUserData((prevState) => {
      return {
        ...prevState,
        password: password,
      };
    });
  };
  return (
    <Grid container spacing={5} p={3} className="auth-wrapper">
      <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' } }}>
        <SidePanel/>
      </Grid>
      <Grid item md={4} sm={6} xs={12} className="fade">
        <Heading
          title="Sign in"
          link="Create new account"
          url="/register"
          param={false}
        >
        <div className="loginForm">
          {errorMessage.value && (
            <div className="messageBox">
              <p className="messageBox--Text">{errorMessage.value}</p>
            </div>
          )}
          <FormControl fullWidth variant="filled" sx={{mb:'10px'}}>
            <FilledInput autoComplete="off"
              size="small"
              disableUnderline
              id="input-username"
              name="username"
              placeholder="Username/Email"
              onChange={(e) => handleInputChange(e)}
              error={userData.username === "" ? false : true}
            />
          </FormControl>
          <CustomPasswordField getPasword={getPassword} />          
          
            <Link to="/forgot-password" className="link">
              <Button sx={{mt:2,mb:2,textTransform:"inherit",fontWeight:'500',
              fontSize:'16px'}}
              className="link--Button"
              color="primary">
                Forgot password
              </Button>
            </Link>
          
          <Button
            className="form--Button"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
        </div>
        </Heading>
      </Grid>
    </Grid>
    
  );
};

export default Login;

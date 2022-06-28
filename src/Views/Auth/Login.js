import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FilledInput, Button, FormControl, Grid, InputLabel, Box } from "@mui/material";
import CustomPasswordField from "./CustomPasswordField";
import SidePanel from "./SidePanel";
import Heading from "./Heading";

const Login = () => {
  const [userData, setUserData] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });

  // console.log("auth", localStorage.getItem("isAuthenticated"));

  console.log(userData.username);
  console.log(userData.password);

  const handleInputChange = (e) => {
    setUserData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //if username or password field is empty, return error message
    if (userData.username === "" || userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Empty username/password field",
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
        value:
          "We couldn’t find an account matching the username and password you entered. Please check your username and password and try again.",
      }));
    }
  };

  const getPassword = (password) => {
    console.log(password);
    setUserData((prevState) => {
      return {
        ...prevState,
        password: password,
      };
    });
  };
  return (
    <Grid container spacing={5} p={3}>
      <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' } }}>
        <SidePanel/>
      </Grid>
      <Grid item md={4} sm={6} xs={12}>
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
          <FormControl fullWidth variant="filled" sx={{mb:1}}>
            <InputLabel sx={{lineHeight:'1'}} htmlFor="input-username">Username</InputLabel>
            <FilledInput  sx={{borderRadius:"10px"}}
              size="small"
              disableUnderline
              id="input-username"
              name="username"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <CustomPasswordField getPasword={getPassword} />          
          
            <Link to="/forgot-password" className="link">
              <Button sx={{mt:2,mb:2,textTransform:"inherit",fontWeight:'400',fontSize:'16px',position:'relative',top:'50%'}}>Forgot password</Button>
            </Link>
          
          <Button
            className="form--Button"
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            sx={{
              "&.MuiButtonBase-root:hover": {
                boxShadow:'none',
              }
            }}
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

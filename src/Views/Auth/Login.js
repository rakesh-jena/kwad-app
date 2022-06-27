import { React, useState } from "react";
import { Link } from "react-router-dom";
import { TextField, Button, FormControl, Grid } from "@mui/material";
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
    <Grid container spacing={5} p={5}>
      <Grid item xs={8}>
        <SidePanel/>
      </Grid>
      <Grid item xs={4}>
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
          <FormControl className="loginForm--Paper--FormControl">
            <TextField
              id="outlined-textarea"
              placeholder="Email"
              multiline
              name="username"
              className="form--TextField"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <div className="loginForm--Paper--Password">
            <CustomPasswordField getPasword={getPassword} />
          </div>
          <div className="loginForm--Paper--ForgotPassword">
            <Link to="/forgot-password" className="link">
              <Button className="link--Button">Forgot password</Button>
            </Link>
          </div>
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

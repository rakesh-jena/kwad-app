import { React, useState } from "react";
import SidePanel from "./SidePanel";
import Heading from "./Heading";
import CustomPasswordField from "./CustomPasswordField";
import { FilledInput, Button, FormControl, Grid, InputLabel, Box, TextField, MenuItem } from "@mui/material";

const Register = (props) => {
  return (
    <Grid container spacing={5} p={3}>
      <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' } }}>
        <SidePanel/>
      </Grid>
      <Grid item md={4} sm={6} xs={12} className="fade">
        <Heading
          title="Sign up"
          link="Already have an account?"
          url="/"
          param={false}
        >
          <RegisterForm/>
        </Heading>
      </Grid>
    </Grid>
  );
};
const currencies = [
  {
    value: 'IND',
    label: '+91',
  },
  {
    value: 'EUR',
    label: '+89',
  },
  {
    value: 'BTC',
    label: '+09',
  },
  {
    value: 'JPY',
    label: '+34',
  },
];

const RegisterForm = () => {
  const [userData, setUserData] = useState({ lname: "", email:"", fname: "", password: "", code: "", contact: "" });
  const [errorMessage, setErrorMessage] = useState({ value: "" });
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

      if (userData.fname === "") {
        setErrorMessage((prevState) => ({
          value: "First Name can’t be blank",
          value: "test",
        }));
      } else if (userData.lname === "") {
        setErrorMessage((prevState) => ({
          value: "Last Name can’t be blank",
        }));
      } else if (userData.email === "") {
        setErrorMessage((prevState) => ({
          value: "Email can’t be blank",
        }));
      } else if (userData.password === "") {
        setErrorMessage((prevState) => ({
          value: "Password can’t be blank",
        }));
      } else if (userData.contact === "") {
        setErrorMessage((prevState) => ({
          value: "Contact can’t be blank",
        }));
      } else {
        window.location.pathname = "/confirm-email";
      }
      
    };
  
    const getPassword = (password) => {
      console.log(password);
    };
    const [currency, setCurrency] = useState('EUR');

    const handleChange = (event) => {
      setCurrency(event.target.value);
    };
    return (
      <Box>
        {errorMessage.value && (
            <div className="messageBox">
              <p className="messageBox--Text">{errorMessage.value}</p>
            </div>
          )}
        <FormControl variant="filled" sx={{mb:2,width: 'calc(50% - 2px)',pr:"4px"}}>
            <FilledInput
              size="small"
              disableUnderline
              id="input-fname"
              name="fname"
              placeholder="First Name"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl variant="filled" sx={{mb:2,width: 'calc(50% - 2px)'}}>
            <FilledInput
              size="small"
              disableUnderline
              id="input-lname"
              name="lname"
              placeholder="Last Name"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
        <FormControl fullWidth variant="filled" sx={{mb:2}}>
            <FilledInput
              size="small"
              disableUnderline
              id="input-email"
              name="email"
              placeholder="Email"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <CustomPasswordField getPasword={getPassword}/>
        <TextField sx={{mt:2,mb:3,mr:'4px',width:'calc(25% - 2px)',borderRadius:"10px"}} size="small"
          id="filled-select-currency"
          select
          value={currency}
          onChange={handleChange}
          variant="filled"
          name="code"
          InputProps={{ disableUnderline: true }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <FormControl variant="filled" sx={{mt:2,mb:3,width:'calc(75% - 2px)'}}>
            <FilledInput
              size="small"
              disableUnderline
              id="input-contact"
              name="contact"
              placeholder="Contact"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          
        <Button
          className="form--Button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Sign up
        </Button>
      </Box>
    );
  };

export default Register;

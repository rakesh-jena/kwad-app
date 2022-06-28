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
      <Grid item md={4} sm={6} xs={12}>
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
  const [userData, setUserData] = useState({ lname: "", email:"", fname: "", password: "", code: "", number: "" });
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
      window.location.pathname = "/confirm-email";
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
        <FormControl variant="filled" sx={{mb:1,width: '48%',pr:1}}>
            <InputLabel sx={{lineHeight:'1'}} htmlFor="input-username">First Name</InputLabel>
            <FilledInput  sx={{borderRadius:"10px"}}
              size="small"
              disableUnderline
              id="input-fname"
              name="fname"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <FormControl variant="filled" sx={{mb:1,width: '49%'}}>
            <InputLabel sx={{lineHeight:'1'}} htmlFor="input-lname">Last Name</InputLabel>
            <FilledInput  sx={{borderRadius:"10px"}}
              size="small"
              disableUnderline
              id="input-lname"
              name="lname"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
        <FormControl fullWidth variant="filled" sx={{mb:1}}>
            <InputLabel sx={{lineHeight:'1'}} htmlFor="input-email">Email</InputLabel>
            <FilledInput  sx={{borderRadius:"10px"}}
              size="small"
              disableUnderline
              id="input-email"
              name="email"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          <CustomPasswordField getPasword={getPassword}/>
        <TextField sx={{mt:1,mb:3,mr:1,width:'22%'}} size="small"
          id="filled-select-currency"
          select
          label="Code"
          value={currency}
          onChange={handleChange}
          variant="filled"
          InputProps={{ disableUnderline: true }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        
        <FormControl variant="filled" sx={{mt:1,mb:3,width:'75%'}}>
            <InputLabel sx={{lineHeight:'1'}} htmlFor="input-contact">Contact</InputLabel>
            <FilledInput  sx={{borderRadius:"10px"}}
              size="small"
              disableUnderline
              id="input-contact"
              name="contact"
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
          
        <Button
          className="form--Button"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{
            "&.MuiButtonBase-root:hover": {
              boxShadow:'none',
            }
          }}
        >
          Sign up
        </Button>
      </Box>
    );
  };

export default Register;

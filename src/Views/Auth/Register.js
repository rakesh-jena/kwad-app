import { React, useState } from "react";
import SidePanel from "./SidePanel";
import Heading from "./Heading";
import './Register.scss';
import CustomPasswordField from "./CustomPasswordField";
import { FilledInput, Button, FormControl, Grid, Box } from "@mui/material";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from "react-router-dom";


const Register = (props) => {
  return (
    <Grid container spacing={5} p={3} className="auth-wrapper">
      <Grid item md={8} sm={6} sx={{ display: { xs: 'none', sm:'block' } }}>
        <SidePanel/>
      </Grid>
      <Grid item md={4} sm={6} xs={12} className="fade" style={{paddingLeft:'20px'}}>
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
  const navigate = useNavigate();
  const [formSubmit, submitForm] = useState(true);
  const [userData, setUserData] = useState({ lname: "", email:"", fname: "", password: "", code: "+91", contact: "" });
  const [errorMessage, setErrorMessage] = useState({ for: "", value:""});

  const handleInputChange = (e) => {    
    if(!formSubmit){
      if(errorMessage.for === e.target.name && e.target.value != null){
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
      console.log(userData);
      submitForm(false);
    if (userData.fname === "") {
      setErrorMessage((prevState) => ({
        value: "First Name can’t be blank",
        for: "fname"
      }));
    } else if (userData.lname === "") {
      setErrorMessage((prevState) => ({
        value: "Last Name can’t be blank",
        for: "lname"
      }));
    } else if (userData.email === "") {
      setErrorMessage((prevState) => ({
        value: "Email can’t be blank",
        for: "email"
      }));
    } else if (userData.password === "") {
      setErrorMessage((prevState) => ({
        value: "Password can’t be blank",
        for: "password"
      }));
    } else if (userData.contact === "") {
      setErrorMessage((prevState) => ({
        value: "Please share your contact number",
        for: "contact"
      }));
    } else {
      navigate("/confirm-email");
    }
    
  };

  const getPassword = (e) => { 
    const passwordInputValue = e.trim();
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);

    let errMsg = "";
    if(passwordLength===0){
      errMsg="Password is empty";
    }else if(!uppercasePassword){
          errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
          errMsg="At least one Lowercase";
    }else if(!digitsPassword){
          errMsg="At least one digit";
    }else if(!specialCharPassword){
          errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
          errMsg="At least minumum 8 characters";
    }else{
      errMsg="";
    }
    setErrorMessage((prevState) => ({
      value: errMsg,
      for: "password"
    }));
    
    if(!formSubmit){
      if(e != null && errorMessage.for === "password"){
        setErrorMessage((prevState) => ({
          value: "",
          for: ""
        }));
      }      
    }   
    setUserData((prevState) => {
      return {
        ...prevState,
        password: e,
      };
    });
  };
  // const [currency, setCurrency] = useState('+91');
  const [phone, setPhone] = useState();

  const handlePhone = (e) => {    
    setPhone(e);
    if(!formSubmit){
      if(errorMessage.for === "contact" && e != null){
        setErrorMessage((prevState) => ({
          value: "",
          for: ""
        }));
      }
    }
    setUserData((prevState) => {
      return {
        ...prevState,
        contact: e,
      };
    });
  };
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleEmailChange = (e) => {
    if(!isValidEmail(e.target.value))
    {
      setErrorMessage((prevState) => ({
        value: "Enter valid email",
        for: "email"
      }));
    } else {
      setErrorMessage((prevState) => ({
        value: "",
        for: ""
      }));
      setUserData((prevState) => {
        return {
          ...prevState,
          [e.target.name]: e.target.value,
        };
      });
    } 
  }

  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  //   setUserData((prevState) => {
  //     return {
  //       ...prevState,
  //       code: event.target.value,
  //     };
  //   });
  // };
  return (
    <Box>
      {errorMessage.value && (
          <div className="messageBox">
            <p className="messageBox--Text">{errorMessage.value}</p>
          </div>
        )}
      <FormControl variant="filled" sx={{mb:'10px',width: 'calc(50% - 5px)',pr:"10px"}}>
          <FilledInput
            size="small"
            disableUnderline
            id="input-fname"
            name="fname"
            placeholder="First Name"
            onChange={(e) => handleInputChange(e)}
          />
        </FormControl>
        <FormControl variant="filled" sx={{mb:'10px',width: 'calc(50% - 5px)'}}>
          <FilledInput
            size="small"
            disableUnderline
            id="input-lname"
            name="lname"
            placeholder="Last Name"
            onChange={(e) => handleInputChange(e)}
          />
        </FormControl>
      <FormControl fullWidth variant="filled" sx={{mb:'10px'}}>
          <FilledInput
            size="small"
            disableUnderline
            id="input-email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleEmailChange(e)}
          />
        </FormControl>
        <CustomPasswordField getPasword={getPassword}/>
      {/* <TextField sx={{mt:'10px',mb:'10px',mr:'10px',width:'calc(25% - 5px)',borderRadius:"10px"}} size="small"
        id="filled-select-currency"
        select
        value={currency}
        onChange={handleChange}
        variant="filled"
        name="code"
        InputProps={{ disableUnderline: true }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.label} value={option.label}>
            {option.label} {option.value}
          </MenuItem>
        ))}
      </TextField>
      
      <FormControl variant="filled" sx={{mt:'10px',mb:'20px',width:'calc(75% - 5px)'}}>
          <FilledInput
            size="small"
            disableUnderline
            id="input-contact"
            name="contact"
            placeholder="Contact"
            onChange={(e) => handleInputChange(e)}
          />
        </FormControl> */}
      <PhoneInput
        inputExtraProps={{
          name: "contact",
          required: true,
        }}
        isValid={(value, country) => {
          if (value.match(/12345/)) {
            return 'Invalid value: '+value+', '+country.name;
          } else if (value.match(/1234/)) {
            return false;
          } else {
            return true;
          }
        }}
        country={"in"}
        value={phone}
        onChange={handlePhone}
      />
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

import React from "react";
import { IconButton, InputAdornment, FormControl, InputLabel, FilledInput } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomPasswordField = (props) => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    props.getPasword(event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (    
      <FormControl fullWidth variant="filled">
        <FilledInput sx={{borderRadius:'10px'}} autoComplete="off" placeholder="Password"
          size="small"
          name="password"
          disableUnderline
          id="filled-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
  );
};

export default CustomPasswordField;

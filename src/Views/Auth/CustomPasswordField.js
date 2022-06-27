import React from "react";
import { IconButton, OutlinedInput, InputAdornment, FormControl } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const CustomPasswordField = (props) => {
  const { classes } = props;
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
    <div className="customPasswordField">
      <FormControl className="customPasswordField--FormControl">
        <OutlinedInput
          classes={classes}
          className="customPasswordField--FormControl--OutlinedInput"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          InputProps={{ classes }}
          name="password"
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
                className="customPasswordField--FormControl--OutlinedInput--Visibility"
              >
                {values.showPassword ? (
                  <Visibility className="customPasswordField--FormControl--OutlinedInput--Visibility" />
                ) : (
                  <VisibilityOff className="customPasswordField--FormControl--OutlinedInput--Visibility" />
                )}
              </IconButton>
            </InputAdornment>
          }
          placeholder="Password"
          labelWidth={70}
        />
      </FormControl>
    </div>
  );
};

export default CustomPasswordField;

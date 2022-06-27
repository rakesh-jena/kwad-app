import React, { useState } from "react";
import { Paper, Divider, FormControl, Button } from "@mui/material";
import { ReactComponent as GoogleSvg } from "../../Images/Logo/Google.svg";
import { Link } from "react-router-dom";

const Heading = (props) => {
  const [customDesign, setCustomDesign] = useState(props.param);
  console.log(setCustomDesign);
  return (
    <div className="kwadRight">
      {customDesign === false ? (
        <Paper elevation={0} className="kwadRight--Paper">
          <div className="kwadRight--Paper--Header">
            <span className="pageTitle">{props.title}</span>
            <Link to={props.url} className="link">
              <Button
                className="link--Button"
                href="#text-buttons"
                color="primary"
              >
                {props.link}
              </Button>
            </Link>
          </div>
          <Divider className="kwadRight--Paper--Divider" />
          {props.children}
          <div className="kwadRight--Paper--SigninOption">
            <span>Or</span>
          </div>
          <FormControl className="kwadRight--Paper--GoogleButton">
            <Button
              className="kwadRight--Paper--GoogleButton--Button"
              variant="contained"
            >
              <GoogleSvg />
            </Button>
          </FormControl>
        </Paper>
      ) : (
        <div>{props.children}</div>
      )}
    </div>
  );
};

export default Heading;

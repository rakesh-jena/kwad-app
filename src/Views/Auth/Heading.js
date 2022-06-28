import React from "react";
import { Box, Paper, Divider, FormControl, Button } from "@mui/material";
import { ReactComponent as GoogleSvg } from "../../Images/Logo/Google.svg";
import { Link } from "react-router-dom";

const Heading = (props) => {
  return (
        <Paper elevation={0} sx={{bgcolor:'transparent',position:'relative',top:'50%',transform:'translateY(-50%)',maxWidth:'90%',m:'auto'}}>
          <div className="auth-header">
            <span className="pageTitle">{props.title}</span>
            <Link to={props.url} className="link">
              <Button sx={{textTransform:"inherit",fontWeight:'500',fontSize:'16px'}}
                className="link--Button"
                color="primary"
              >
                {props.link}
              </Button>
            </Link>
          </div>
          <Divider sx={{mb:2, mt:2}} />
          {props.children}
          <Box sx={{textAlign:'center',mb:1,mt:1}}>or</Box>
          <FormControl sx={{width:'100%'}}>
            <Button
              variant="contained"
              sx={{
                boxShadow: 'none',
                paddingTop: '10px',
                paddingBottom: '10px',
                border: '1px solid #d1d7d7',
                borderRadius: '10px',
                bgcolor:'white',
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "white",
                  boxShadow:'none',
                  border: '1px solid blue',
                }
                }}
            >
              <GoogleSvg />
            </Button>
          </FormControl>
        </Paper>
  );
};

export default Heading;

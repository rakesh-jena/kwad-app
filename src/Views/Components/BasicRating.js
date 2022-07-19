import * as React from "react";
import "./BasicRating.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const BasicRating = (props) => {
  const [value, setValue] = React.useState(2);
  
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
      className="basicRating"
    >
      
      <Rating value={props.rating} readOnly className="user-rating" size="large"
      icon={<StarRoundedIcon fontSize="inherit" style={{ color:'#023246' }}/>}
      emptyIcon={<StarRoundedIcon style={{ color:'#d4d4d4' }} fontSize="inherit" />}
      precision={0.1}/>
    </Box>
  );
};

export default BasicRating;

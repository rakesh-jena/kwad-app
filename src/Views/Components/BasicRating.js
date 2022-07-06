import * as React from "react";
import "./BasicRating.scss";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const BasicRating = (props) => {
  const [value, setValue] = React.useState(2);
  
  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
      className="basicRating"
    >
      <Rating
        name="read-only"
        value={props.rating}
        readOnly
        sx={{ fontSize: `${props.fontSize}` }}
        className="basicRating--Rating"
      />
    </Box>
  );
};

export default BasicRating;

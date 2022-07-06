import React, { useContext } from "react";
import "./Pin.scss";
import BasicRating from "./BasicRating";
import { Box, Card, CardHeader,CardMedia,CardContent,CardActions,IconButton } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Pin = (props) => {
  return (
  <Box className="pin-wrapper">
    <Card sx={{ maxWidth: 345,borderRadius:'10px',maxHeight:150 }}>
      <CardHeader
        action={<div>
          <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton></div>
        }
      />
      <CardMedia
        component="img"
        height="150"
        image={props.url}
        alt="Paella dish"
      />
      <CardContent>
      Pinnipeds, commonly known as seals diverse....
      <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>
      </CardContent>
      
    </Card>
      <div className="pin--Content">
        <span className="pin--Content--Title">{props.title}</span>
        <div className="pin--Content--Rating">
          <BasicRating rating={props.rating}/>
        </div>
      </div>
    </Box>
  );
};
export default Pin;

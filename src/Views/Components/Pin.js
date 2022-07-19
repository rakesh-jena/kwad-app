import React, { useContext } from "react";
import "./Pin.scss";
import BasicRating from "./BasicRating";
import { Box, Card, CardHeader,CardMedia,CardContent,Button,IconButton, sliderClasses } from "@mui/material";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Pin = (props) => {
  const str = 'The quick brown fox jumps over the lazy dog.';
  return (
  <Box className="pin-wrapper">
    <Card sx={{ maxWidth: 345,borderRadius:'10px' }}>
      <CardHeader
        action={<div>
          <Button aria-label="add to favorites" sx={{mr:'5px'}}>
            <ShareIcon />
          </Button>
          <Button aria-label="share">
            Save
          </Button>
          </div>
        }
      />
      <CardMedia
        component="img"
        
        image={props.url}
        alt="Paella dish"
      />
      <CardContent>
        <p>{str.slice(0, 30)}....</p>
        <Button aria-label="add to favorites">
          13.1k&nbsp;
          <FavoriteBorderIcon />
        </Button>
        
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

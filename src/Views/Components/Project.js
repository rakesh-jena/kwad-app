import * as React from "react";
import "./Project.scss";
import Button from "@mui/material/Button";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Project = () => {
  return (
    <div className="project">
      <img
        src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
        alt=""
      />
      <div className="project--Desc">
        <div className="project--Desc--Buttons">
          <Button
            size="small"
            variant="contained"
            startIcon={<IosShareIcon />}
            className="project--Card--Button--Share"
          />
          <Button
            variant="contained"
            size="small"
            className="project--Card--Button--Save"
          >
            Save
          </Button>
        </div>
        <div className="project--Desc--Bottom">
          <div className="project--Desc--Title">
            Pinnipeds, commonly known as seals diverse....
          </div>
          <div className="project--Desc--Bottom--Like">
            <Button
              size="small"
              variant="contained"
              endIcon={<FavoriteBorderIcon />}
              className="project--Card--Button--Like"
            >
              13.4k
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;

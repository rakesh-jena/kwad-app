import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./UserMessage.scss";

const UserMessage = (props) => {
  const { userMessage } = props;

  return (
    <Card
      sx={{ display: "flex", boxShadow: "none", backgroundColor: "#f6f6f6" }}
      className="userMessage"
      onClick={() => props.handleChat(userMessage)}
    >
      <CardMedia
        component="img"
        sx={{
          width: 50,
          height: 50,
          margin: "auto 10px auto 0",
          borderRadius: "10px",
          border: "2px solid #d3d4ce",
        }}
        image={userMessage.image}
        alt="Live from space album cover"
      />
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        className="userMessage--Box"
      >
        <CardContent>
          <div>
            <span className="userMessage--UserName">
              {userMessage.userName}
            </span>
          </div>
          <div className="userMessage--CardContent--MessageTime">
            <span className="userMessage--LastMessage">{userMessage.last}</span>
            <span className="userMessage--CardContent--MessageTime--Time">
              {userMessage.time}
            </span>
          </div>
        </CardContent>
      </Box>
    </Card>
  );
};

export default UserMessage;

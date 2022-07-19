import React from "react";
import { Box, Grid, IconButton, Avatar, Button,Slide} from "@mui/material";
import SearchBar from "../Components/SearchBar";
import WriteIcon from "../../Images/chatIcon.png";
import pinImg from "../../Images/photo1.jfif";
import "./Chat.scss";

const icon = (
    <div className="chat">
            <div className="chat-header">
                <div className="chat-header-top">
                    <span className="title">Chats</span>
                    <Box>                        
                        <IconButton>
                            <img src={WriteIcon} alt="ui" style={{width:'15px'}}/>
                        </IconButton>
                    </Box>
                </div>
                <SearchBar style={{boxShadow:'none',bgcolor:'#f9f9f9'}} open={true} placeholder="Search Messages"/>
            </div>
            <div className="list">
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>John Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>John Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>Awesome Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>Rakesh Jena</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>John Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>John Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>Awesome Doe</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar src={pinImg} alt="Avatar"/>
                    </Grid>
                    <Grid className="chat-details" item sm={8}>
                        <h4>Rakesh Jena</h4>
                        <p>You: Ux is awesome...</p>
                    </Grid>
                    <Grid className="chat-time" item sm={2}>
                        <p>12m</p>
                    </Grid>
                </Grid>
            </div>
            <Button className="see-more">
                See All
            </Button>
        </div>
);
export default function Chat(props) {
    return (
        <Slide direction="up" in={props.open} mountOnEnter unmountOnExit>
          {icon}
        </Slide>
        
    );
}
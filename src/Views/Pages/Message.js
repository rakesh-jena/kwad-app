import React, { useContext } from "react";
import PropTypes from 'prop-types';
import './Message.scss';
import SearchBar from "../Components/SearchBar";
import Page from "../Layouts/Page";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import pinImg from "../../Images/photo1.jfif"
import { Box, Grid, IconButton, Avatar, Tab, Tabs} from "@mui/material";

function Chats(props) {
    return (
        <div className="chatList">
            <div className="chat-header">
                <div className="chat-header-top">
                    <h4>Chats</h4>
                    <Box>
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton>
                            <AddIcon/>
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
            </div>
        </div>
    )
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`profile-tabpanel-${index}`}
        aria-labelledby={`profile-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `profile-tab-${index}`,
      'aria-controls': `profile-tabpanel-${index}`,
    };
  }

function UserFiles(props) {    
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="userFiles">
            <div className="userFiles-header">
                <Avatar src={pinImg} alt="Avatar"/>
                <h2>Laura Geni</h2>
            </div>
            <div className="userFiles-tab">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Profile tabs">
                        <Tab label="Media" {...a11yProps(0)} />
                        <Tab label="Files" {...a11yProps(1)} />
                        <Tab label="Links" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    Media
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Files
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Links
                </TabPanel>
            </div>
            <div className="privacy">
                <h6>Privacy and Support</h6>
                <p>Get immediate support</p>
            </div>
        </div>
    )
}

function MsgBar(props) {}

function CurrentChat(props) {
    return (
        <div className="currentChat">            
            <div className="currentChat-header">
                <Avatar src={pinImg} alt="Avatar"/> 
                <h4>Laura Geni</h4>
                <Box>
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                </Box>
            </div>
            <p className="msg-time">23 Aug 2021, 04:45</p>
            <div className="message-container">

            </div>
            <div className="message-bottom">
                <IconButton>
                    <AddIcon/>
                </IconButton>
                <MsgBar/>
                <IconButton>
                    <AddIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default function Message () {
    return (
        <Page scroll={false} searchBar={true}>
            <Grid container>
                <Grid item md={3} sm={6}>
                    <Chats/>
                </Grid>
                <Grid item md={6} sm={6}>
                    <CurrentChat/>
                </Grid>
                <Grid item md={3} sm={0}>
                    <UserFiles/>
                </Grid>
            </Grid>
        </Page>
    );
}
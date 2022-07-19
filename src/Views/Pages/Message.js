import React, { useContext } from "react";
import PropTypes from 'prop-types';
import './Message.scss';
import { styled } from '@mui/material/styles';
import SearchBar from "../Components/SearchBar";
import Page from "../Layouts/Page";
import SearchIcon from "@mui/icons-material/Search";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import EmojiEmotionsRoundedIcon from '@mui/icons-material/EmojiEmotionsRounded';
import pinImg from "../../Images/photo1.jfif"
import { Box, Grid, IconButton, Avatar, Tab, Tabs, InputBase} from "@mui/material";

function Chats(props) {
    return (
        <div className="chatList">
            <div className="chat-header">
                <div className="chat-header-top">
                    <span className="title">Chats</span>
                    <Box>
                        <IconButton style={{
                            color:'#d4d4ce'
                        }}>
                            <SearchIcon/>
                        </IconButton>
                        <IconButton style={{
                            color:'#023246'
                        }}>
                            <AddRoundedIcon/>
                        </IconButton>
                    </Box>
                </div>
                <SearchBar style={{boxShadow:'none',bgcolor:'#f9f9f9'}} open={true} placeholder="Search Messages"/>
            </div>
            <div className="list">
                <Grid container className="chat-wrapper">
                    <Grid className="chat-avatar" item sm={2}>
                        <Avatar variant="square" src={pinImg} alt="Avatar"/>
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
                        <Avatar variant="square" src={pinImg} alt="Avatar"/>
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
                        <Avatar variant="square" src={pinImg} alt="Avatar"/>
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
                        <Avatar variant="square" src={pinImg} alt="Avatar"/>
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
      <div className="tabpanel"
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
                <Avatar variant="square" src={pinImg} alt="Avatar"/>
                <h2>Laura Geni</h2>
            </div>
            <div className="userFiles-tab">
                <Tabs value={value} onChange={handleChange} aria-label="UserFiles tabs">
                    <Tab label="Media" {...a11yProps(0)} />
                    <Tab label="Files" {...a11yProps(1)} />
                    <Tab label="Links" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    Media Panel
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Files Panel
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Links Tab
                </TabPanel>
            </div>
            <div className="privacy">
                <h6>Privacy and Support</h6>
                <p>Get immediate support</p>
            </div>
        </div>
    )
}
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: '#f1f1f1',
    width:'100%',
    display: 'flex'
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    pointerEvents: 'none',
    display: 'flex',
    marginLeft: 'auto'
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: '#919191',
    width:'100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(0,1),
      width: '100%',
    },
  }));
function MsgBar(props) {
    return (
        <Search >            
            <StyledInputBase
              placeholder="Write a message"
              inputProps={{ 'aria-label': 'message' }}
            />
            <SearchIconWrapper>
              <EmojiEmotionsRoundedIcon sx={{color:'#023246'}}/>
            </SearchIconWrapper>
          </Search>
    );
}

function CurrentChat(props) {
    return (
        <div className="currentChat">            
            <div className="currentChat-header">
                <Avatar variant="square" src={pinImg} alt="Avatar"/> 
                <h4>Laura Geni</h4>
                <Box>
                    <IconButton>
                        <AddIcCallRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <VideocamRoundedIcon/>
                    </IconButton>
                </Box>
            </div>
            <p className="msg-time">23 Aug 2021, 04:45</p>
            <div className="message-container">

            </div>
            <div className="message-bottom">
                <IconButton>
                    <AddCircleRoundedIcon/>
                </IconButton>
                <MsgBar/>
                <IconButton>
                    <SendRoundedIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default function Message () {
    return (
        <Page scroll={false} searchBar={true}>
            <Grid container className="Message-wrapper">
                <Grid item md={3} sm={4} className="Message-panel">
                    <Chats/>
                </Grid>
                <Grid item md={6} sm={4} className="Message-panel">
                    <CurrentChat/>
                </Grid>
                <Grid item md={3} sm={4} className="Message-panel" style={{borderRight:'none'}}>
                    <UserFiles/>
                </Grid>
            </Grid>
        </Page>
    );
}
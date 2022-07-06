import React from "react";
import "./Profile.scss";
import PropTypes from 'prop-types';
import Page from "../Layouts/Page";
import profileImg from "../../Images/userPic.png"
import { Grid, Box, Button, IconButton, Rating, Select, FormControl, MenuItem, Tab, Tabs } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Project from "../Components/Project";
import pinImg from "../../Images/photo5.jfif"

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
export default function Profile (props) {
    const [value, setValue] = React.useState(0);
    const [age, setAge] = React.useState('');

    const handleSelect = (event) => {
      setAge(event.target.value);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const loop = index => {
        let content = [];
        for (let i = 0; i < index; i++) {
          content.push(
            <Grid key={i} item md={3} sm={4}  className="dashboardContent">          
                <Project url={pinImg} rating={2} title="Demo"/>          
            </Grid>
            );
        }
        return content;
      };
    return (
        <Page scroll={true} searchBar={true}>
            <Grid container className="profile-container">
                <Grid item sm={3} className="profileLeft">
                    <Box>
                        <div className="profile-img-wrapper">
                            <img src={profileImg} alt="Profile" />
                        </div>
                        
                        <div className="connectUser">
                            <Button 
                            variant="outlined"
                            size="small"
                            className="Connect"
                            >
                            Connect
                            </Button>
                            <IconButton
                            sx={{ bgcolor: "#023246",color:"#f9f9f9" }}
                            className="Message"
                            >
                            <ChatBubbleIcon />
                            </IconButton>
                            <Button size="small"
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            className="Follow"
                            >
                            Follow
                            </Button>
                        </div>
                        <div className="userCost">
                            <span>
                                <span className="Price">
                                    <span>&#8377;</span> {props.price}
                                </span>
                                <span className="Text">Per Second </span>
                            </span>
                        </div>
                    </Box>
                </Grid>
                <Grid item sm={9} className="profileRight">
                    <Box className="userDetails">
                        <h4 className="userName">Trevor</h4>
                        <h6 className="userDesignation">Software Engineer</h6>
                        <p className="userAbout">
                        Branding system for Grassroots Larder; A locally sourced grocer and a culinary market opening up soon on Cherry Street in Tulsa, Oklahoma. Grassroots Larder will be packed with a selection of items they deem essential: wine, beer, fresh bread, fresh pasta, sauces and special pantry items.
                        </p>
                        <div className="userRating">
                            <Rating/>
                            <span className="ratingNum">
                                <span className="ratingUser">2.5/</span>
                                5
                            </span>
                        </div>                        
                    </Box>
                </Grid>
            </Grid>
            <Box className="Profile-bottom">
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="Profile tabs">
                        <Tab label="Projects" {...a11yProps(0)} />
                        <Tab label="Reviews" {...a11yProps(1)} />
                        <Tab label="Blogs" {...a11yProps(2)} />
                        <Tab label="About" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    value={age}
                    onChange={handleSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value="">
                        <em>Recent</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                    <Grid container  spacing={1} p={1} className="dashboard">
                        {loop(20)}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container  spacing={1} p={1} className="dashboard">
                        {loop(20)}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container  spacing={1} p={1} className="dashboard">
                        {loop(20)}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    About
                </TabPanel>
            </Box>
        </Page>
    );
}
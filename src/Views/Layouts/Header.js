import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Avatar, IconButton, Stack, Button, Badge } from '@mui/material';
import Container from '@mui/material/Container';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import filterIcon from "../../Images/filter.png";
import logoB from "../../Images/Logo/logo_blue.png";
import AvatarSrc from "../../Images/userPic.png";
import './Header.scss';
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SearchBar from '../Components/SearchBar';
import Chat from "../Components/Chat";

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: 'none',
  backgroundColor : '#f9f9f9',
  zIndex:'1100',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px + 20px)`,
    backgroundColor : 'transparent',
    zIndex:'1232',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(open === false && {})
}));

export default function Header(props) {
  const {open} = props;
  const [chat, setChat] = React.useState(false);

  const chatOpen = () => {
    setChat(true);
  };
  const chatClose = () => {
    setChat(false);
  }
  return (
    <AppBar position="fixed" open={open} className={open ? 'header-closed' : 'header-opened'}>
      <Container style={{position:'relative'}}>
        
        <Toolbar disableGutters sx={{bgcolor:'#f9f9f9'}}>  
          {open ? '' : (
            <div className='kwad-logo-header'>
              <img src={logoB} alt='kwad logo' />
            </div>
          )} 
          {props.search ? (
            <SearchBar open={open} placeholder="Search"/>
          ) : ''}     
          
          {open ? '' : (
            <Stack className='header-icons' direction="row" spacing={1}>
              <Avatar alt={`Avatar`} src={AvatarSrc}/>
              <IconButton aria-label='dashboard'>
                <DashboardRoundedIcon/>
              </IconButton>
              <IconButton aria-label='dashboard'>
                <Badge badgeContent={4} color="primary">
                  <MailIcon/>
                </Badge>
              </IconButton>
              <IconButton aria-label='dashboard'>
                <NotificationsRoundedIcon/>
              </IconButton>
              <IconButton aria-label='dashboard'>
                <SettingsRoundedIcon/>
              </IconButton>              
            </Stack>                    
          )}
          <Button className="appbar-filter-div" startIcon={
            <img
              src={filterIcon}
              alt="filter--icon"
              className="appbar-filter-Icon"
            />} onClick={chat ? chatClose : chatOpen}/>
        </Toolbar>
        <Chat open={chat}/>
        
      </Container>
    </AppBar>
  );
};
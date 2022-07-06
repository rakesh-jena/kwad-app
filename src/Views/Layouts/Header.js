import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Container from '@mui/material/Container';
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import filterIcon from "../../Images/filter.png";
import logoB from "../../Images/Logo/logo_blue.png";
import AvatarSrc from "../../Images/userPic.png";
import './Header.scss';
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import SearchBar from '../Components/SearchBar';

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: 'none',
  backgroundColor : '#f6f6f6',
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(open === false && {})
}));

export default function Header(props) {
  const {open} = props;
  return (
    <AppBar position="fixed" open={open} className={open ? 'header-closed' : 'header-opened'}>
      <Container>
        
        <Toolbar disableGutters>  
          {open ? '' : (
            <div className='kwad-logo-header'>
              <img src={logoB} alt='kwad logo' />
            </div>
          )} 
          {props.search ? (
            <SearchBar open={open} placeholder="Search"/>
          ) : ''}     
          
          {open ? '' : (
            <div className='header-icons'>

              <Avatar alt={`Avatar`} src={AvatarSrc}
                />
                <IconButton aria-label='dashboard'>
                <DashboardRoundedIcon/>
                </IconButton>
                <IconButton aria-label='dashboard'>
              <MarkEmailUnreadRoundedIcon/>
              </IconButton>
              <IconButton aria-label='dashboard'>
              <NotificationsRoundedIcon/>
              </IconButton>
              <IconButton aria-label='dashboard'>
              <SettingsRoundedIcon/>
              </IconButton>
            </div>                    
          )}
          <div className="appbar-filter-div">
            <img
              src={filterIcon}
              alt="filter--icon"
              className="appbar-filter-Icon"
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
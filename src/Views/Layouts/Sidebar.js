import {React, useState } from "react";
import LogoWhite from "../../Images/Logo/logo_white.png";
import AvatarSrc from "../../Images/userPic.png";
import { Link, useLocation } from "react-router-dom";
import { Drawer,ListItem,ListItemButton,ListItemIcon,List,Badge,Button,ListItemAvatar ,Avatar,IconButton } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import MailIcon from '@mui/icons-material/Mail';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ArrowLeftRoundedIcon from '@mui/icons-material/ArrowLeftRounded';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import './Sidebar.scss';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}));

export default function Sidebar(props) {
  const theme = useTheme();
  const {open,  drawerWidth, handleDrawerClose} = props;
  const location = useLocation();

  return (
    <Drawer className="sidebar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: '160px',
          boxSizing: 'border-box',
          bgcolor: '#023246',
          color: '#fff',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader >
        <img src={LogoWhite} alt="logo" className="sidebar-logo-img"/>
      </DrawerHeader>
      <List>        
        <ListItem alignItems="center" disableGutters className={location.pathname === '/profile'  ? 'active' : ''}>
          <ListItemButton>
            <ListItemAvatar>
              <Link to="/profile">
                <Avatar
                  alt={`Avatar`}
                  src={AvatarSrc}
                />        
              </Link>      
              <p >John</p>
              <p >Doe</p>
            </ListItemAvatar>
          </ListItemButton>
        </ListItem>
        <ListItem alignItems="center" className={location.pathname === '/dashboard'  ? 'active' : ''}>
          <ListItemButton >
            <ListItemIcon>
              <Link to="/dashboard">
                {location.pathname === '/dashboard' ? (<DashboardRoundedIcon/>) : (<DashboardOutlinedIcon/>)}
                
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem className={location.pathname === '/message'  ? 'active' : ''}>
          <ListItemButton >
            <ListItemIcon>
              <Link to="/message">
                <Badge badgeContent={4} color="primary">
                  {location.pathname === '/message' ? (<MarkEmailUnreadRoundedIcon/>) : (<MarkEmailUnreadOutlinedIcon/>)}
                </Badge>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem className={location.pathname === '/notifications'  ? 'active' : ''}>
          <ListItemButton >
            <ListItemIcon>
              <Link to="/notifications">
                <Badge badgeContent={4} color="primary">
                  {location.pathname === '/notifications' ? (<NotificationsRoundedIcon/>) : (<NotificationsOutlinedIcon/>)}
                </Badge>
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem className={location.pathname === '/settings'  ? 'active' : ''}>
          <ListItemButton>
            <ListItemIcon>
              <Link to="/settings">
                {location.pathname === '/settings' ? (<SettingsRoundedIcon/>) : (<SettingsOutlinedIcon/>)}
                
              </Link>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      
      <IconButton className="sidebar-toggle-btn" onClick={handleDrawerClose}>
        <ArrowLeftRoundedIcon/>
      </IconButton>
      
    </Drawer>
  );
};

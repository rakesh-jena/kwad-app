import React from "react";
import LogoWhite from "../../Images/Logo/logo_white.png";
import { Link, useLocation } from "react-router-dom";
import { Drawer,ListItem,ListItemButton,ListItemIcon,ListItemText,List, Button } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
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
  const {open,  drawerWidth} = props;

  return (
    <Drawer className="sidebar"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
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
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleRoundedIcon/>
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <DashboardRoundedIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <MarkEmailUnreadRoundedIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <NotificationsRoundedIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem >
          <ListItemButton>
            <ListItemIcon>
              <SettingsRoundedIcon/>
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      
      <Button className="sidebar-toggle-btn">
        <ChevronLeftIcon/>
      </Button>
      
    </Drawer>
  );
};

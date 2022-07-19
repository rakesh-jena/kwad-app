import React, { useState } from "react";
import "./Page.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import Button from '@mui/material/Button';
import Chat from "../Components/Chat";

const drawerWidth = 180;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: "#f9f9f9",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "100vh",
    marginLeft: `-${drawerWidth}px`,
    borderTopLeftRadius: '0px',
    borderBottomLeftRadius: '0px',
    zIndex:'0',
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: '-20px',
      borderTopLeftRadius: '20px',
      borderBottomLeftRadius: '20px',
      zIndex:'1213',
    }),
    ...(open === false && {})
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function Page(props) {
  const { children } = props;
  const [open, setOpen] = React.useState(true);
  const location = useLocation();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
        <Header open={open} search={props.searchBar}/>
      <Sidebar open={open} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose}/>
      <Main open={open} sx={props.scroll ? ({overflowY:'scroll'}) : ''}>
        <Container style={{height:'100%'}}>
          <DrawerHeader />
          {children}
        </Container>
        <Button className="sidebar-toggle-btn" onClick={handleDrawerOpen}
        sx={open ? ({display:'none'}) : ({})}>
          <ArrowRightRoundedIcon/>
        </Button>
        
      </Main>
    </Box>
  );
};
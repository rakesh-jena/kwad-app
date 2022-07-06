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

const drawerWidth = 180;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: "100%",
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
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

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open}/>
      <Sidebar open={open} drawerWidth={drawerWidth} handleDrawerClose={handleDrawerClose}/>

      <Main open={open}>
        <Container>
          <DrawerHeader />
          {children}
        </Container>
        <Button className="sidebar-toggle-btn" onClick={handleDrawerOpen}>
          <ArrowRightRoundedIcon/>
        </Button>
      </Main>
    </Box>
  );
};
import React, { useState } from "react";
import "./DashboardLayout.scss";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiAppBar from "@mui/material/AppBar";
import { useLocation } from "react-router-dom";
import Suggestions from "./Suggestions";
import Header from "./Header";

import Sidebar from "./Sidebar";

const drawerWidth = 250;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth + 56 * 2}px)`,
    marginLeft: `${theme.spacing(7)}`,
    marginRight: `${theme.spacing(7)}`,
    marginTop: `${theme.spacing(3)}`,
    paddingTop: `${theme.spacing(2)}`,
    paddingBottom: `${theme.spacing(2)}`,
    backgroundColor: "#f6f6f6",
    boxShadow: "none",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(open === false && {
    width: `calc(100% -  (${theme.spacing(7)} + ${theme.spacing(7)}))`,
    marginLeft: `${theme.spacing(7)}`,
    marginRight: `${theme.spacing(7)}`,
    marginTop: `${theme.spacing(3)}`,
    paddingTop: `${theme.spacing(2)}`,
    paddingBottom: `${theme.spacing(2)}`,
    backgroundColor: "#f6f6f6",
    boxShadow: "none",
  }),
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    paddingLeft: theme.spacing(7),
    paddingTop: theme.spacing(5),
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
      borderRadius: "14px 0 0 14px",
      marginLeft: 0,
    }),
  })
);

export const OpenStatus = React.createContext();

const MainLayout = (props) => {
  const { children } = props;
  const location = useLocation();
  const [open, setOpen] = useState(true);
  console.log("from dashboard layout = " + open);
  const handleDrawerHandle = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <Box sx={{ display: "flex" }} className="mainLayout">
      <CssBaseline />
      {location.pathname === "/dashboard" || open === false ? (
        <AppBar position="fixed" open={open}>
          {open === false ? (
            <div>
              <Header displayIcons={true} />
            </div>
          ) : (
            <div>
              <Header displayIcons={false} />
            </div>
          )}
          {location.pathname === "/dashboard" ? (
            <div>
              <Suggestions />
            </div>
          ) : (
            <></>
          )}
        </AppBar>
      ) : (
        <></>
      )}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#023246",
            borderRight: "0ch",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Divider />
        <Sidebar />
      </Drawer>

      <IconButton
        onClick={handleDrawerHandle}
        className={open ? "mainLayout--Open" : "mainLayout--Close"}
      >
        {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
      <OpenStatus.Provider value={open}>
        <Main open={open}>{children}</Main>
      </OpenStatus.Provider>
    </Box>
  );
};

export default MainLayout;

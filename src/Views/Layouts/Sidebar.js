import React from "react";
import LogoW from "../../Images/Logo/logo_white.png";
import { Link, useLocation } from "react-router-dom";
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Sidebar = (props) => {
  console.log(props.displayIcons);
  const [value, setValue] = React.useState(0);
  const location = useLocation();
  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className={props.displayIcons ? "sideNavBar" : ""}>
      <div
        className={
          props.displayIcons ? "sideNavBar--Div--Active" : "sideNavBar--Div"
        }
      >
        {props.displayIcons ? (
          <></>
        ) : (
          <div className="confirmationPageLayout--Paper--LogoDiv">
            <img
              src={LogoW}
              alt="kwad-logo"
              className="confirmationPageLayout--Paper--LogoDiv--Logo"
            />
          </div>
        )}
        <Tabs
          orientation={props.displayIcons ? "" : "vertical"}
          value={props.displayIcons ? "" : value}
          onChange={props.displayIcons ? "" : handleChange}
          aria-label="Vertical tabs example"
          className={
            props.displayIcons ? "sideNavBar--List--Active" : "sideNavBar--List"
          }
        >
          <Tab
            className="sideNavBar--Tab"
            label={
              location.pathname === "/dashboard" ? (
                <div className="sideNavBar--TabDiv">
                  <AccountCircleRoundedIcon
                    className={
                      props.displayIcons
                        ? "sideNavBar--ListItemIcon--Active"
                        : "sideNavBar--ListItemIcon--Avatar"
                    }
                  />
                </div>
              ) : (
                <div className="sideNavBar--TabDiv">
                  <AccountCircleOutlinedIcon
                    className={
                      props.displayIcons
                        ? "sideNavBar--ListItemIcon--Active"
                        : "sideNavBar--ListItemIcon--Avatar"
                    }
                  />
                </div>
              )
            }
            to="/dashboard"
            component={Link}
          />
          {props.displayIcons ? (
            <></>
          ) : (
            <div className="sideNavBar--TabDiv--Name">
              <span>Trevor William</span>
            </div>
          )}
          <Tab
            className="sideNavBar--Tab"
            label={
              location.pathname === "/profile" ? (
                <DashboardRoundedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              ) : (
                <DashboardOutlinedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              )
            }
            to="/profile"
            component={Link}
          />
          <Tab
            className="sideNavBar--Tab"
            label={
              location.pathname === "/message" ? (
                <MarkEmailUnreadRoundedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              ) : (
                <MarkEmailUnreadOutlinedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              )
            }
            to="/message"
            component={Link}
          />
          <Tab
            className="sideNavBar--Tab"
            label={
              location.pathname === "/notifications" ? (
                <NotificationsRoundedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              ) : (
                <NotificationsNoneOutlinedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              )
            }
            to="/notifications"
            component={Link}
          />
          <Tab
            className="sideNavBar--Tab"
            label={
              location.pathname === "/settings" ? (
                <SettingsRoundedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              ) : (
                <SettingsOutlinedIcon
                  className={
                    props.displayIcons
                      ? "sideNavBar--ListItemIcon--Active"
                      : "sideNavBar--ListItemIcon"
                  }
                />
              )
            }
            to="/settings"
            component={Link}
          />
        </Tabs>
      </div>
    </div>
  );
};

export default Sidebar;

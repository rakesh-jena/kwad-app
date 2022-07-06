import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Toolbar, Avatar } from '@mui/material';
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

const drawerWidth = 180;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  boxShadow: 'none',
  backgroundColor : 'transparent',
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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '10px',
  backgroundColor: 'transparent',
  '&:hover': {
    
  },
  width: '100%',
  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  [theme.breakpoints.up('sm')]: {
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#919191',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
    },
  },
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
          <Search sx={open ? '' : (
            {boxShadow:'none',border:'2px solid #023246',m:'0 35px'}
          )}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#023246'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {open ? '' : (
            <div className='header-icons'>

              <Avatar alt={`Avatar`} src={AvatarSrc}
                />
                <DashboardRoundedIcon/>
              <MarkEmailUnreadRoundedIcon/>
              <NotificationsRoundedIcon/>
              <SettingsRoundedIcon/>
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
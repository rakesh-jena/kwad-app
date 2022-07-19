import React from 'react';
import { styled } from '@mui/material/styles';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: '10px',
    backgroundColor: 'transparent',
    '&:hover': {
      boxShadow: '#a3e1d77a 0px 0px 4px',
    },
    '&:focus-within':{
      boxShadow: '#a3e1d7 0px 0px 3px',
    },
    width: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 0px 4px',
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

export default function SearchBar(props) {
    return (
        <Search sx={props.open ? '' : (
            {boxShadow:'none',border:'2px solid #023246',m:'0 35px'}
          )}>
            <SearchIconWrapper>
              <SearchIcon sx={{color:'#023246'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={props.placeholder}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
    );
}
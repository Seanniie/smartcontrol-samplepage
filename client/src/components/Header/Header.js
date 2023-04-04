import React, { useState, useCallback } from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { setSideBarOpen } from 'redux/reducers/Sidebar/setSideBarSlice';
import { useEffect } from 'react';
import { AccountCircle } from '@mui/icons-material';
import HeaderMenu from './HeaderMenu';

//헤더, 헤더메뉴팝오버
export default function Header ({crntOpnMenu, isSideBarOpen}) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSideBarOpen(true));
  }, [dispatch]);

  const handleMenuButtonClick = useCallback(() => {
    dispatch(setSideBarOpen(!isSideBarOpen));
  }, [dispatch, isSideBarOpen]);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{borderBottom: '1px solid lightgray', boxShadow: 'none'}}>
      <Toolbar variant="dense" sx={{backgroundColor:'white', minHeight:'38px', "@media (min-width: 600px)": { pl: "6px", pr: "6px", minHeight: "38px"}}}>
        <Box flexGrow={1} sx={{"@media (min-width: 0px)": { display:'none' }, "@media (min-width: 900px)": { display:'flex' }, alignItems:'center'}}>
          <Box padding={0.5}>
            <IconButton onClick={handleMenuButtonClick} size="small" sx={{p:'0', fontSize:'13px'}}>
              <MenuIcon/>
            </IconButton>
          </Box>
        </Box>
        <Box flexGrow={0}>
          <Button startIcon={<AccountCircle/>} onClick={handleClick} sx={{color:'black', m:'10px', height:'30px'}}>
            <Typography sx={{fontSize:"15px"}}>System Administrator</Typography>
          </Button>
          <HeaderMenu anchorEl={anchorEl} open={open} handleClose={handleClose} crntOpnMenu={crntOpnMenu} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

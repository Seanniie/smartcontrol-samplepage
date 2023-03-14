import { Collapse, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { ExpandMore, AddBoxOutlined, ExpandLess, IndeterminateCheckBoxOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png"

const useStyles = makeStyles((theme) => ({
  sideMenuContainer: {
    [theme.breakpoints.up('sm')]: {
      width: '260px',
      flexShrink: 0,
    }
  },
  noScrollBar: {
    overflowY: 'scroll',
    scrollbarWidth: 'none',
    '&::-webkit-scrollbar': {
      width: 0,
      height: 0,
      display: 'none',
    }
  },
  menuBox: {
    color: '#ebe9e9',
    width: '100%',
    maxWidth: '260px',
  },
  menulv2: {
    fontWeight: '400',
    color: '#ebe9e9',
    background: '#284461',
    paddingBottom: '4px',
    paddingLeft: '24px',
  },
  menulv3: {
    fontWeight: '400',
    color: '#ebe9e9',
    background: '#284461',
    paddingBottom: '4px',
    paddingTop: '4px',
    '&:hover':{
      color:'#0a58ca'
    }
    
  },
}));

export default function Sidebar() {

  const isSideBarOpen = useSelector((state) => {
    return state.sideBarState.value;
  });

  const menuData = useSelector((state) => {
    return state.sideBarTitles.value;
  });
  
  const navigate = useNavigate();
  const classes = useStyles();

  const [openMenuIds, setOpenMenuIds] = useState([]);
  const [openChildMenuIds, setOpenChildMenuIds] = useState([]);

  const handleMenuClick = (id) => {
    if (openMenuIds.includes(id)) {
      setOpenMenuIds(openMenuIds.filter((menuId) => menuId !== id));
    } else {
      setOpenMenuIds([...openMenuIds, id]);
    }
  };
  
  const handleChildMenuClick = (id) => {
    if (openChildMenuIds.includes(id)) {
      setOpenChildMenuIds(openChildMenuIds.filter((childId) => childId !== id));
    } else {
      setOpenChildMenuIds([...openChildMenuIds, id]);
    }
  };
  
  return (
    <>
      {isSideBarOpen && (
        <Box className={classes.sideMenuContainer}>
          <Paper sx={{ height: "100%", bgcolor: "#222E3C" }}>
            <Box>
              <span className="sidebar-brand">
                <img alt="Home" src={logo} />
              </span>
            </Box>
            <Paper className={classes.noScrollBar} sx={{ background: "#222E3C", height: "90%", boxShadow: "none", color:'#ebe9e9' }}>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  {menuData.map((menu) => (
                    <Box key={menu.id}>
                      <ListItemButton sx={{ pl: "12px" }} className={classes.menuBox} onClick={() => handleMenuClick(menu.id)}>
                        {menu.icon}
                        <ListItemText sx={{ ml: "8px" }}>
                          <Typography variant="string">{menu.title}</Typography>
                        </ListItemText>
                        {openMenuIds.includes(menu.id) ? <ExpandLess /> : <ExpandMore />}
                      </ListItemButton>
                      {menu.children && (
                        <Collapse in={openMenuIds.includes(menu.id)}>
                          <List disablePadding className={classes.menuBox}>
                            {menu.children.map((child) => (
                              <div key={child.id}>
                                <ListItemButton onClick={() => handleChildMenuClick(child.id)} className={classes.menulv2}>
                                  {openChildMenuIds.includes(child.id) ? <IndeterminateCheckBoxOutlined fontSize="string"/> : <AddBoxOutlined fontSize="string"/>}
                                  <ListItemText sx={{ml: "8px"}}>
                                    <Typography variant="string">{child.title}</Typography>
                                  </ListItemText>
                                  {openChildMenuIds.includes(child.id) ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                {child.children && (
                                  <Collapse in={openChildMenuIds.includes(child.id)}>
                                    <List disablePadding className={classes.menulv3}>
                                    {child.children.map((grandchild) => (
                                      <div key={grandchild.id}>
                                        <ListItemButton onClick={()=>navigate(grandchild.to)} sx={{pl:'36px'}} className={classes.menulv3}>
                                          {grandchild.icon}
                                          <ListItemText sx={{ml:'4px'}}> 
                                            <Typography variant="string">{grandchild.title}</Typography>
                                          </ListItemText>
                                        </ListItemButton>
                                      </div>
                                    ))}
                                    </List>
                                  </Collapse>
                                )}
                              </div>
                            ))}
                          </List>
                        </Collapse>
                      )}
                    </Box>
                  ))}
                </List>
              </Box>
            </Paper>
          </Paper>
        </Box>
      )}
    </>
  );
}
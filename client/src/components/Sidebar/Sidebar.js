import { Collapse, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ExpandMore, AddBoxOutlined, ExpandLess, IndeterminateCheckBoxOutlined, AppsOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import logo from "assets/images/logo.png"
import { setMenuId } from "redux/reducers/Tab/setActivatedMenu";
import { addTab } from "redux/reducers/Tab/setOpenTab";

//사이드바, 헤더의 isSideBarOpen에 따라 open, close
export default function Sidebar() {

  const dispatch = useDispatch();
  const isSideBarOpen = useSelector(state => state.sideBarState.value);
  const menuData = useSelector(state => state.sideBarTitles.value);
  const crntOpnMenu = useSelector(state => state.tabMenu.value);
  const activateTab = useSelector(state => state.activateTab.value);

  const [openMenuIds, setOpenMenuIds] = useState([]);
  const [openChildMenuIds, setOpenChildMenuIds] = useState([]);

  const handleClick = (id, setOpenIds, openIds) => {
    openIds.includes(id) ? setOpenIds(openIds.filter((openedId) => openedId !== id)): setOpenIds([...openIds, id]);
  };    

  const handleMenuClick = (menu) => {
    const isMenuOpen = crntOpnMenu.some((tab) => tab.id === menu.id);
    if (!isMenuOpen) {
      const newTab = { id: menu.id };
      dispatch(addTab(newTab));
    } 
    dispatch(setMenuId(menu.id));
  };
  
  return (
    <>
      {isSideBarOpen && (
        <Box sx={{ width: { sm: '260px' }, flexShrink: 0 }} >
          <Paper sx={{ height: "100%", bgcolor: "#222E3C" }}>
            <Box>
              <span className="sidebar-brand">
                <img alt="Home" src={logo} />
              </span>
            </Box>
            <Paper sx={{ background: "#222E3C", height: "100%", boxShadow: "none", overflowY: 'scroll', '&::-webkit-scrollbar': {display: 'none'}}}>
              <Box>
                <List sx={{ color: "#ebe9e9"}} disablePadding>
                  {menuData
                    .filter((menu) => menu.id !== menuData[0].id)
                    .map((menu) => (
                      <Box key={menu.id}>
                        <ListItemButton sx={{ pl: "12px" }} onClick={() => handleClick(menu.id, setOpenMenuIds, openMenuIds)}>
                          <AppsOutlined fontSize="small"/>
                          <ListItemText sx={{ ml: "8px" }}>
                            <Typography variant="string">{menu.title}</Typography>
                          </ListItemText>
                          {openMenuIds.includes(menu.id) ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        {menu.children && (
                          <Collapse in={openMenuIds.includes(menu.id)}>
                            <List disablePadding>
                              {menu.children.map((child) => (
                                <div key={child.id}>
                                  {child.children ? (
                                    <ListItemButton onClick={() => handleClick(child.id, setOpenChildMenuIds, openChildMenuIds)} sx={{background: '#284461', paddingLeft: '24px'}}>
                                      {openChildMenuIds.includes(child.id) ? <IndeterminateCheckBoxOutlined fontSize="string"/> : <AddBoxOutlined fontSize="string"/>}
                                      <ListItemText sx={{ml: "8px"}}>
                                        <Typography variant="string">{child.title}</Typography>
                                      </ListItemText>
                                      {openChildMenuIds.includes(child.id) ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>)
                                    :
                                    (<ListItemButton onClick={() => handleMenuClick(child)} sx={{ pl: '33px', '&:hover': { color: '#0a58ca' }}}>
                                      <ListItemText>
                                        <Typography variant="string" 
                                          sx={{
                                            color: child.id === activateTab ? "#ffc800" : "inherit",
                                            fontWeight: child.id === activateTab ? "bold" : "inherit",
                                          }}>{child.title}</Typography>
                                      </ListItemText>
                                    </ListItemButton>)}
                                  {child.children && (
                                    <Collapse in={openChildMenuIds.includes(child.id)}>
                                      <List disablePadding sx={{background: '#284461'}}>
                                      {child.children.map((grandchild) => (
                                        <div key={grandchild.id}>
                                          <ListItemButton onClick={() => handleMenuClick(grandchild)} sx={{ pl: '40px', '&:hover': { color: '#0a58ca' }}}>
                                            <ListItemText>
                                              <Typography variant="string" 
                                                sx={{
                                                  color: grandchild.id === activateTab ? "#ffc800" : "inherit",
                                                  fontWeight: grandchild.id === activateTab ? "bold" : "inherit",
                                                }}>{grandchild.title}</Typography>
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
import { Collapse, List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ExpandMore, AddBoxOutlined, ExpandLess, IndeterminateCheckBoxOutlined, PrecisionManufacturing, CellTowerSharp } from "@mui/icons-material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "assets/images/logo.png"

export default function Sidebar() {

  const { value: isSideBarOpen } = useSelector((state) => state.sideBarState);
  const { value: menuData } = useSelector((state) => state.sideBarTitles);
  const navigate = useNavigate();
  const [openMenuIds, setOpenMenuIds] = useState([]);
  const [openChildMenuIds, setOpenChildMenuIds] = useState([]);
  const handleClick = (id, setOpenIds, openIds) =>
    openIds.includes(id) ? setOpenIds(openIds.filter((openedId) => openedId !== id)): setOpenIds([...openIds, id]);
  
  const iconMap = {
    "PrecisionManufacturing": <PrecisionManufacturing fontSize="small"/>,
    "CellTowerSharp": <CellTowerSharp fontSize="small"/>,
  };
  
  const Icon = ({ iconName }) => {
    return iconMap[iconName];
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
            <Paper sx={{ background: "#222E3C", height: "90%", boxShadow: "none", overflowY: 'scroll', '&::-webkit-scrollbar': {display: 'none'}}}>
              <Box>
                <List sx={{ color: "#ebe9e9"}} disablePadding>
                  {menuData.map((menu) => (
                    <Box key={menu.id}>
                      <ListItemButton sx={{ pl: "12px" }} onClick={() => handleClick(menu.id, setOpenMenuIds, openMenuIds)}>
                        <Icon iconName={menu.icon} />
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
                                <ListItemButton onClick={() => handleClick(child.id, setOpenChildMenuIds, openChildMenuIds)} sx={{background: '#284461', paddingLeft: '24px'}}>
                                  {openChildMenuIds.includes(child.id) ? <IndeterminateCheckBoxOutlined fontSize="string"/> : <AddBoxOutlined fontSize="string"/>}
                                  <ListItemText sx={{ml: "8px"}}>
                                    <Typography variant="string">{child.title}</Typography>
                                  </ListItemText>
                                  {openChildMenuIds.includes(child.id) ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                                {child.children && (
                                  <Collapse in={openChildMenuIds.includes(child.id)}>
                                    <List disablePadding sx={{background: '#284461'}}>
                                    {child.children.map((grandchild) => (
                                      <div key={grandchild.id}>
                                        <ListItemButton onClick={() => navigate(grandchild.to)} sx={{ pl: '40px', '&:hover': { color: '#0a58ca' }}}>
                                          {grandchild.icon}
                                          <ListItemText> 
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
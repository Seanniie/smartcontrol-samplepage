import { List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import logo from "assets/images/logo.png"
import { PrecisionManufacturing, ExpandMore, AnalyticsSharp, ArchitectureSharp, BalanceSharp, CellTowerSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";

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
}));

export default function Sidebar () {
  const isSideBarOpen = useSelector(state=>{
    return state.SibeBarState.value;
  });

  const classes = useStyles();

  return (
    <>
      {isSideBarOpen && (
        <Box className={classes.sideMenuContainer}>
          <Paper sx={{height:'100%', bgcolor:'#222E3C'}}>
            <Box>
              <span className="sidebar-brand">
                <img alt="Home" src={logo}/>
              </span>
            </Box>
            <Paper sx = {{bgcolor:'#222E3C', height:'90%', boxShadow:"none"}} className={classes.noScrollBar}>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  <Box>
                    <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                      <PrecisionManufacturing fontSize="small"/>
                      <ListItemText sx={{ml:'8px'}}>
                        <Typography variant="string">수요 계획</Typography>
                      </ListItemText>
                      <ExpandMore/>
                    </ListItemButton>
                  









                  </Box>
                </List>
              </Box>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  <Box>
                    <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                      <CellTowerSharp fontSize="small"/>
                      <ListItemText sx={{ml:'8px'}}>
                        <Typography variant="string">보충 계획</Typography>
                      </ListItemText>
                      <ExpandMore/>
                    </ListItemButton>
                  </Box>
                </List>
              </Box>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  <Box>
                    <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                      <BalanceSharp fontSize="small"/>
                      <ListItemText sx={{ml:'8px'}}>
                        <Typography variant="string">생산 계획</Typography>
                      </ListItemText>
                      <ExpandMore/>
                    </ListItemButton>
                  </Box>
                </List>
              </Box>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  <Box>
                    <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                      <ArchitectureSharp fontSize="small"/>
                      <ListItemText sx={{ml:'8px'}}>
                        <Typography variant="string">공급 계획</Typography>
                      </ListItemText>
                      <ExpandMore/>
                    </ListItemButton>
                  </Box>
                </List>
              </Box>
              <Box>
                <List className={classes.menuBox} disablePadding>
                  <Box>
                    <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                      <AnalyticsSharp fontSize="small"/>
                      <ListItemText sx={{ml:'8px'}}>
                        <Typography variant="string">재고 계획</Typography>
                      </ListItemText>
                      <ExpandMore/>
                    </ListItemButton>
                  </Box>
                </List>
              </Box>
            </Paper>
          </Paper>
        </Box>
      )}
    </>
  );
};



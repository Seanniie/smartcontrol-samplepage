import { List, ListItemButton, ListItemText, Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
import logo from "assets/images/logo.png"
import { PrecisionManufacturing, ExpandLess, ExpandMore, AnalyticsSharp, ArchitectureSharp, BalanceSharp, CellTowerSharp } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  sideMenuContainer: {
    height: '100vh',
    background: '#284461',
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
  menuName: {
    fontSize: '13px',
    fontWeight: '400',
  }
  
}));

export default function Menu () {

  const classes = useStyles();

  return (
    <Box className={classes.sideMenuContainer}>
      <Paper sx={{height:'100%', bgcolor:'#222E3C', m:0, p:0}}>
        <Box sx={{display:'inline'}}>
          <span class="sidebar-brand">
            <img alt="Home" src={logo}/>
          </span>
        </Box>
        <Paper sx = {{m:0, p:0, color:'#ebe9e9', bgcolor:'#222E3C', height:'90%'}} className={classes.noScrollBar}>
          <div>
            <List className={classes.menuBox} disablePadding>
              <div>
                <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                  <PrecisionManufacturing fontSize="small"/>
                  <ListItemText sx={{ml:'8px'}}>
                    <Typography variant="body1">수요 계획</Typography>
                  </ListItemText>
                  <ExpandMore/>
                </ListItemButton>
              </div>
            </List>
          </div>
          <div>
            <List className={classes.menuBox} disablePadding>
              <div>
                <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                  <CellTowerSharp fontSize="small"/>
                  <ListItemText sx={{ml:'8px'}}>
                    <Typography variant="body1">보충 계획</Typography>
                  </ListItemText>
                  <ExpandMore/>
                </ListItemButton>
              </div>
            </List>
          </div>
          <div>
            <List className={classes.menuBox} disablePadding>
              <div>
                <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                  <BalanceSharp fontSize="small"/>
                  <ListItemText sx={{ml:'8px'}}>
                    <Typography variant="body1">생산 계획</Typography>
                  </ListItemText>
                  <ExpandMore/>
                </ListItemButton>
              </div>
            </List>
          </div>
          <div>
            <List className={classes.menuBox} disablePadding>
              <div>
                <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                  <ArchitectureSharp fontSize="small"/>
                  <ListItemText sx={{ml:'8px'}}>
                    <Typography variant="body1">공급 계획</Typography>
                  </ListItemText>
                  <ExpandMore/>
                </ListItemButton>
              </div>
            </List>
          </div>
          <div>
            <List className={classes.menuBox} disablePadding>
              <div>
                <ListItemButton sx={{pl:"12px"}} className={classes.menuBox}>
                  <AnalyticsSharp fontSize="small"/>
                  <ListItemText sx={{ml:'8px'}}>
                    <Typography variant="body1">재고 계획</Typography>
                  </ListItemText>
                  <ExpandMore/>
                </ListItemButton>
              </div>
            </List>
          </div>
        </Paper>
      </Paper>
    </Box>
  );
};



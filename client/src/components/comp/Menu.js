import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";

const useStyles = makeStyles((theme) => ({
  menu: {
    height: '100vh',
    background: '#284461',
    [theme.breakpoints.up('sm')]: {
      width: '260px',
      flexShrink: 0,
    }
  },
}));

export default function MainContent () {

  const classes = useStyles();

  return (
    <Box className={classes.menu}>
    </Box>
  );
};



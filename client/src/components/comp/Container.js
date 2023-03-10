import Header from "components/comp/Header";
import React from "react";
import Menu from "./Menu";
import MainContent from "components/comp/MainContent";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  main: {
    background: '#fff',
    flexDirection: 'column',
    overflow: 'hidden',
    display: 'flex',
    transition: 'margin-left .35s ease-in-out, left .35s ease-in-out, margin-right .35s ease-in-out, right .35s ease-in-out',
    width: '100%',
    minWidth: 0,
  },
}));

export default function Container () {
  const classes = useStyles();
  return (
    <>
      <Menu/>
      <Box className={classes.main}>
        <Header/>
        <MainContent/>
      </Box>
    </>
  );
};



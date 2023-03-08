import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import MainContent from "components/comp/MainContent";
import { Provider } from "react-redux";
import store from "redux/store";
import { Box } from "@mui/system";
import Menu from "components/comp/Menu";
import { ThemeProvider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "./theme.js"

const useStyles = makeStyles((theme) => ({
  main: {
    display: 'flex',
    width: '100%',
    minWidth: 0,
    transition: 'margin-left .35s ease-in-out, left .35s ease-in-out, margin-right .35s ease-in-out, right .35s ease-in-out',
    background: '#fff',
    flexDirection: 'column',
    overflow: 'hidden',
  },
}));

export default function App () {

  const classes = useStyles();

  return (
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <Menu/>
        <Box className={classes.main}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<MainContent/>}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
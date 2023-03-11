import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "pages/Login";
import { Provider } from "react-redux";
import store from "redux/store";
import { Box, ThemeProvider } from "@mui/material";
import theme from "./theme.js"
import Container from "components/Container";
import Sidebar from "components/Sidebar";

export default function App () {

  const location = useLocation();

  return (
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
        <Sidebar/>
        <Box className={`main ${location.pathname === "/" ? "login" : ""}`}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Container/>}/>
          </Routes>
        </Box>
      </ThemeProvider>
    </Provider>
  );
}
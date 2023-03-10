import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import { Provider } from "react-redux";
import store from "redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.js"
import Container from "components/comp/Container";

export default function App () {

  return (
    <Provider store = {store}>
      <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Container/>}/>
          </Routes>
      </ThemeProvider>
    </Provider>
  );
}
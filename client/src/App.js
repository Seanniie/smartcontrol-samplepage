import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "pages/Login";
import { Provider } from "react-redux";
import store from "redux/store";
import { Box } from "@mui/material";
import Container from "pages/Container";
import Sidebar from "components/Sidebar/Sidebar";

export default function App () {

  const location = useLocation();

  return (
    <Provider store = {store}>
      <Sidebar/>
      {/* navigate된 url이 login일경우 className을 login으로 변경 */}
      <Box className={`main ${location.pathname === "/login" ? "login" : ""}`}>
        <Routes>
          <Route path="/" element={<Container/>} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </Box>
    </Provider>
  );
}
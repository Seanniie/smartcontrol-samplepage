import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import MainContent from "components/comp/MainContent";
import { Provider } from "react-redux";
import store from "redux/store";
import { Box } from "@mui/system";
import Menu from "components/comp/Menu";

function App() {

  return (
    <Provider store = {store}>
      <Menu/>
      <Box className="main">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<MainContent/>}/>
        </Routes>
      </Box>
    </Provider>
  );
}

export default App;

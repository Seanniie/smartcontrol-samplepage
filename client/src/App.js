import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "pages/Login";
import MainContent from "pages/MainContent";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<MainContent/>}/>
      </Routes>
    </>
  );
}

export default App;

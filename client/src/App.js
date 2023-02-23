import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";

function App() {

  return (
    //root는 전체페이지를 감싼다
    <div className="root">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

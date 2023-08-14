import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ListDetail from "./pages/List/listdetail";
import { response } from "express";
import Home from "./pages/HOME/Home";
import SearchList from "./pages/SearchList/SearchList";
import Menubar from "./components/Home/Menubar/menubar";
import Top_lists from "./pages/List/Top_lists";

function App() {
  return (
    <>
      <BrowserRouter>
        <Menubar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/search/:searchValue" element={<SearchList />}></Route>
          <Route path="/top_lists/:queryValue" element={<Top_lists />} />
          <Route path="/listdetail" element={<ListDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

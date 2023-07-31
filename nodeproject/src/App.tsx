import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./pages/List/list";
import ListDetail from "./pages/List/listdetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/listdetail" element={<ListDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

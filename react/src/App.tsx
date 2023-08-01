import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./pages/List/list";
import ListDetail from "./pages/List/listdetail";

const images = [
  "https://mp-seoul-image-production-s3.mangoplate.com/132489/wyk-rtbv7vl3qb.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
  "https://mp-seoul-image-production-s3.mangoplate.com/34573_1683981819877728.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80",
  "https://mp-seoul-image-production-s3.mangoplate.com/34573_1683981820272582.jpg?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80"
]

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/listdetail" element={<ListDetail images={images} />} />
      </Routes>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./pages/List/list";
import ListDetail from "./pages/List/listdetail";
import { response } from "express";

interface Imagedata {
  _id: string;
  placename: string;
  address: string;
  category: string;
  images: string;
}

function App() {
  const [imagedata, setImagedata] = useState<Imagedata[]>([]);

  useEffect(() => {
    axios
      .get<Imagedata[]>("http://localhost:8080/api/data") // 수정된 주소로 변경
      .then((response) => setImagedata(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/list" element={<List />} />
        <Route path="/listdetail" element={<ListDetail images={imagedata} />} />
      </Routes>
    </Router>
  );
}

export default App;

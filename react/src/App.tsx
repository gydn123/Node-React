import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import List from "./pages/List/list";
import ListDetail from "./pages/List/listdetail";
import { response } from "express";
import Menubar from "./pages/List/menubar";

interface TrustBestItem {
  src: string;
  alt: string;
  titleText: string;
  content: string;
  url: string;
}

function App() {
  const [trustBest, settrustBest] = useState<TrustBestItem[]>([]);

  useEffect(() => {
    axios
      .get<TrustBestItem[]>("http://localhost:8080/api/data/trustBest") // 수정된 주소로 변경
      .then((response) => settrustBest(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Router>
      <Menubar />
      <Routes>
        <Route path="/list" element={<List />} />
        <Route
          path="/listdetail"
          element={<ListDetail TrustBestItem={trustBest} />}
        />
      </Routes>
    </Router>
  );
}

export default App;

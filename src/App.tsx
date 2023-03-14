import React, { useState } from "react";
import Search from "./views/search/Search";
import Result from "./views/result/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [card, setCard] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search setCard={setCard} />} />
          <Route path="/result" element={<Result card={card} />} />
          <Route path="*" element={<Search setCard={setCard} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

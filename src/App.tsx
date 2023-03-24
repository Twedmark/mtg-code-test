import Search from "./views/search/Search";
import Result from "./views/result/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

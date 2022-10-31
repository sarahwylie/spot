import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { useSelector } from "react-redux";

import Home from "./components/pages/Home";
import Quiz from "./components/pages/Quiz";
import Stats from "./components/pages/Stats";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import LoginSignup from "./Components/Assets/Main/Main";
import UniversityCompetitions from "./Components/Assets/Path/Path";
import SciTech from "./Components/Assets/SciTech/sci";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/path" element={<UniversityCompetitions />} />
        <Route path="/scitech" element={<SciTech />} />{" "}
      </Routes>
    </Router>
  );
}

export default App;
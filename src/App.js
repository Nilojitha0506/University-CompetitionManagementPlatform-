import React from "react";
import LoginSignup from "./Components/Assets/Main/Main";
import UniversityCompetitions from "./Components/Assets/Path/Path";
import SciTech from "./Components/Assets/SciTech/sci";
import Competition01 from "./Components/Assets/SciTech/Competitions01/Competitions01";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/path" element={<UniversityCompetitions />} />
        <Route path="/scitech" element={<SciTech />} />
        <Route path="/competition01" element={<Competition01 />} /> 
      </Routes>
    </Router>
  );
}

export default App;

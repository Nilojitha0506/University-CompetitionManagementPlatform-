import React from "react";
import ReactDOM from "react-dom";
import LoginSignup from "./Components/Assets/Main/Main";
import UniversityCompetitions from "./Components/Assets/Path/Path";
import SciTech from "./Components/Assets/SciTech/sci";
import './index.css';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import App from "./App";



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

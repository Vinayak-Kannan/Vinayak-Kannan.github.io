import React, { CSSProperties } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lead from "./Components/Lead";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Lead />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

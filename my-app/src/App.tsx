import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Lead from "./Components/Lead";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Lead />
      <Experience />
    </div>
  );
}

export default App;

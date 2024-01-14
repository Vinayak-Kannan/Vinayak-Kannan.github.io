import React, { CSSProperties, useEffect, useState } from "react";
import "./App.css";
import Lead from "./Components/Lead";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import { metadata } from "./index";
// @ts-ignore
import { Helmet } from "react-helmet";

function App() {
  // On load, loop through the .wav files in the public folder and load them into the audio context
  // Play each of them with fade in and fade out, 5 seconds apart
  // After the last one, loop back to the first one

  return (
    <div className="App">
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Helmet>
      <NavBar />
      <Lead />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;

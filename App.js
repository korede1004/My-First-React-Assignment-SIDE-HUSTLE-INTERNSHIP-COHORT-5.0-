import React from "react";
import "./App.css";
import Geninfo from "./components/Geninfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="mycv">
      <Geninfo />
      <div className="body">
      <Education />
      <Experience />
      </div>
      
    </div>
  );
}
export default App
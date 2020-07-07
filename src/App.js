import React from "react";
import Weather from "./components/weather.js";
import Time from "./components/time.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
    </div>
  );
}

export default App;

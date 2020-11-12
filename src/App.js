import React from "react";
import "./sass/main.scss";

import { NavBar, Hero } from "./components";

function App() {
  return (
    <div className="App">
      <header style={{ zIndex: 10 }}>
        <NavBar />
      </header>
      <Hero />
    </div>
  );
}

export default App;

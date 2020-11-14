import React from "react";
import "./sass/main.scss";

import { NavBar, Hero, Main } from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Main />
    </div>
  );
}

export default App;

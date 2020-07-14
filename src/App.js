import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Alimento from "./components/alimento";

function App() {
  return (
    <BrowserRouter>
      <Alimento/>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

import React, { useState } from "react";
import NavbarMenu from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
   <Router>
    <NavbarMenu />
   </Router>
  );
}

export default App;

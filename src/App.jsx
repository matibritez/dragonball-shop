import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavbarMenu from "./components/Navbar";
import Home from "./Pages/Home";



function App() {
  return (
   <Router>
    <NavbarMenu/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
   </Router>
  );
}

export default App;

import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Netflix from "./pages/Netflix";

export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/signup"  element={<Signup />} />
      <Route exact path="/" element={<Netflix />} />

      
    </Routes>
    </BrowserRouter>
  );
}

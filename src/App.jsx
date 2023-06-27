import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from "./pages/Login";
import Signup from "./pages/signup";
import Netflix from "./pages/Netflix";

export default function App() {
  return (
    
    <BrowserRouter>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero labore expedita provident corrupti, quod, ex consequuntur fuga praesentium minima est inventore nobis! Libero repellat incidunt laboriosam sequi temporibus, dolor optio.</p>
    <Routes>
      
      <Route exact path="/Login" element={<Login />} />
      <Route exact path="/signup"  element={<Signup />} />
      <Route exact path="/" element={<Netflix />} />

      
    </Routes>
    </BrowserRouter>
  );
}

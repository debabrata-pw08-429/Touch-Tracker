// Import Modules_
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Components_
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Settings from "../pages/Settings";
import Results from "../pages/Results";

// Export Component_
function Allroutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/results" element={<Results />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
    </Routes>
  );
}

export default Allroutes;

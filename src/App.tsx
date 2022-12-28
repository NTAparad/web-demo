import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { LoginRequire } from "./authenticate/LoginRequire";
import Register from "./components/pages/Register";

function App() {
  LoginRequire();
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

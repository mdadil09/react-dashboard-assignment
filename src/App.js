import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./Pages/login/Login";
import Signup from "./Pages/signup/Signup";
import Dashboard from "./Pages/dashboard/Dashboard";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

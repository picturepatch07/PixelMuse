import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import CreatePost from "./pages/createPost";
import logo from "./assets/logo.svg";
import Navbar from "./components/Navbar/navbar";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

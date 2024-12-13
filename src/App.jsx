// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Groceries from "./pages/Groceries";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// importing modal so i can preview it
import Modal from "./components/Modal";

export default function App() {
  // Global state for search bar functionality
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Router>
        <Navbar setSearchValue={setSearchValue} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/groceries" element={<Groceries searchValue={searchValue} setSearchValue={setSearchValue} />} />
            </Routes>
          </div>
          <Modal />
        <Footer />
      </Router>
    </>
  );
}

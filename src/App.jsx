// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"
import Groceries from "./pages/Groceries";
import ShoppingCart from "./pages/ShoppingCart";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

// importing modal so i can preview it
import Modal from "./components/Modal";

export default function App() {
  // Global state for search bar functionality
  const [searchValue, setSearchValue] = useState("");
  const [modalData, setModalData] = useState({});

  return (
    <>
      <Router>
        <Navbar setSearchValue={setSearchValue} />
          <div className="main">
            <Routes>
              <Route path="/" element={<Home setModalData={setModalData} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/groceries" element={<Groceries searchValue={searchValue} setModalData={setModalData} />} />
              <Route path="/shopping-cart" element={<ShoppingCart />} />
            </Routes>

            <Modal data={modalData} setModalData={setModalData} />
          </div>
        <Footer />
      </Router>
    </>
  );
}

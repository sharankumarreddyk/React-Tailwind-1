import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Orders from "./pages/Orders";
import Appointments from "./pages/Appointments";
import Machines from "./pages/Machines";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot/Chatbot";


function App() {
  return (
    <Router>
      <div className="bg-white">
        <Header />
        <main className="lg:px-12 px-4 sm:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Machines" element={<Machines />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/Appointments" element={<Appointments />} />
            <Route path="/Support" element={<Chatbot />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
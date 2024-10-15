import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Orders from './pages/Orders';
import Appointments from './pages/Appointments';
import Machines from './pages/Machines';
import Home from './pages/home';


function App() {


  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Machines" element={<Machines />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/Appointments" element={<Appointments/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

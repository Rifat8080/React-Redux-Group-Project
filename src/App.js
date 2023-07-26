import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

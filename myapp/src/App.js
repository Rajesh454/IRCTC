import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import TravellerAddress from './components/TravellerAddress';
import Aadhar from './components/Aadhar';
import UserList from './components/UserList';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/listuser" element={<UserList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<TravellerAddress />} />
        <Route path="/aadhar" element={<Aadhar />} />
        <Route path="/update/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  );
}

export default App;

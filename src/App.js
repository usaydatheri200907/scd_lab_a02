import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './EmployeeList';
import EmployeeProfile from './EmployeeProfile';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<EmployeeList />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
      </Routes>
    </Router>
  );
}

export default App;

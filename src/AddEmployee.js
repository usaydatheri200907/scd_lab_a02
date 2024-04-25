import React, { useState } from 'react';
import './AddEmployee.css';

const AddEmployee = ({ onAddEmployee }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleAddEmployee = () => {
    if (name && email) {
      const newEmployee = {
        id: new Date().getTime(), 
        name,
        email,
      };

      onAddEmployee(newEmployee);

      setName('');
      setEmail('');
    } else {
      alert('Please enter both name and email.');
    }
  };

  return (
    <div className="add-employee">
      <h2>Add Employee</h2>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br></br>
      <label>
        Email:
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button onClick={handleAddEmployee}>Add Employee</button>
    </div>
  );
};

export default AddEmployee;

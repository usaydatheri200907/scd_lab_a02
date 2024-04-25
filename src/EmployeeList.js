import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EmployeeList.css';
import SearchEmployee from './SearchEmployee'; 
import AddEmployee from './AddEmployee'; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setEmployees(response.data);
        setFilteredEmployees(response.data);
      } catch (error) {
        setError('Error fetching employee data');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };

  const handleAddEmployee = (newEmployee) => {
    setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    setFilteredEmployees((prevFilteredEmployees) => [...prevFilteredEmployees, newEmployee]);
  };

return (
  <div>
  <h2>Employee List</h2>
  <AddEmployee onAddEmployee={handleAddEmployee} />
  <SearchEmployee onSearch={handleSearch} />
  {loading && <p>Loading...</p>}
  {error && <p>{error}</p>}
  <ul>
    {filteredEmployees.map((employee) => (
      <li key={employee.id}>
        <Link to={`/employee/${employee.id}`}>{employee.name}</Link>
      </li>
    ))}
  </ul>
</div>
  );
  
};

export default EmployeeList;

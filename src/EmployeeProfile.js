import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './EmployeeProfile.css';

const EmployeeProfile = () => {
  const [employee, setEmployee] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        setEmployee(response.data);
      } catch (error) {
        setError('Error fetching employee data');
      } finally {
        setLoading(false);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        setPosts(response.data);
      } catch (error) {
        setError('Error fetching posts data');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployee();
    fetchPosts();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

return (
    <div className="employee-profile-container">
      <h2>{employee.name}'s Profile</h2>
      <p>Email: {employee.email}</p>
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
  
};

export default EmployeeProfile;

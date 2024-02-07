import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { Navbar, Nav, Image } from "react-bootstrap";
import './UserList.css'; // Import CSS file for styling

function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null); // State variable for error handling

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/travellers/getAll');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Error fetching users. Please try again later.'); // Set error state
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/travellers/delete/${id}`);
      setUsers(users.filter(user => user.id !== id)); // Remove the deleted user from state
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Error deleting user. Please try again later.'); // Set error state
    }
  };

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }}>
          <Image src="/irctclogo2.png" alt="IRCTC Logo" style={{ width: "30px", height: "30px", marginRight: "10px" }} />
          IRCTC
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
        </Nav>
      </Navbar>

      <h1 style={{textAlign:"center", fontFamily:"revert-layer", color:"peru"}}>LIST OF ALL USERS</h1>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Actions</th> {/* Column for delete and update buttons */}
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNo}</td>
              <td>{user.source}</td>
              <td>{user.destination}</td>
              <td>
                <button onClick={() => deleteUser(user.id)} style={{borderRadius:"6px", backgroundColor:"red"}}>Delete</button> {/* Button to delete the user */}
                <Link to={`/update/${user.id}`} ><button style={{borderRadius:"6px", backgroundColor:"seagreen"}}>Update</button></Link> {/* Button to navigate to update */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;

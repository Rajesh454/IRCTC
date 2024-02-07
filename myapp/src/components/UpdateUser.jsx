import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams(); // Get the user id from the URL params
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    source: '',
    destination: '',
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/travellers/get/${id}`);
      setFormData({
        fullName: response.data.fullName,
        email: response.data.email,
        phoneNo: response.data.phoneNo,
        source: response.data.source,
        destination: response.data.destination,
      });
    } catch (error) {
      console.error('Error fetching user:', error);
      setError('Error fetching user. Please try again later.');
    }
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8080/travellers/update/${id}`, formData);
      navigate('/listuser'); // Navigate back to user list after successful update
    } catch (error) {
      console.error('Error updating user:', error);
      setError('Error updating user. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ textAlign: 'center', backgroundColor: 'whitesmoke', height: '500px' }}>
      <h1 style={{ marginTop: "30px" }}>Update User</h1>
      {error && <p>{error}</p>}
      <form onSubmit={updateUser} style={{ backgroundColor: "seagreen", marginLeft: "50px", marginRight: "50px", borderRadius: "8px", height: "380px", boxShadow: "5px 10px 5px rgba(0, 0.6, 0, 0.7)" }}>
        <div className="row">
          <div className="col">
            <label style={{ marginRight: "180px" }}>Full Name:</label>
            <input type="text" className="form-control" placeholder="Enter Your Full Name" name="fullName" style={{ width: "400px", marginLeft: "150px" }} value={formData.fullName} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "455px" }}>Email ID:</label>
            <input type="text" className="form-control" placeholder="Enter email" name="email" style={{ width: "400px", marginLeft: "20px" }} value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <label style={{ marginRight: "135px" }}>Mobile Number:</label>
            <input type="number" className="form-control" placeholder="Enter mobile number" name="phoneNo" style={{ width: "400px", marginLeft: "150px" }} value={formData.phoneNo} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "465px" }}>Source:</label>
            <input type="text" className="form-control" placeholder="Enter source" name="source" style={{ width: "400px", marginLeft: "20px" }} value={formData.source} onChange={handleChange} />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <label style={{ marginRight: "165px" }}>Destination:</label>
            <input type="text" className="form-control" placeholder="Enter destination" name="destination" style={{ width: "400px", marginLeft: "150px" }} value={formData.destination} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "445px" }}>Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" style={{ width: "400px", marginLeft: "20px" }} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: "20px", borderRadius:"6px"}}>Update User</button>
      </form>
    </div>
  );
}

export default UpdateUser;

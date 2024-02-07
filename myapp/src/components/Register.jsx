import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom'; // Import useHistory hook

function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    source: '',
    destination: '',
    password: '',
  });

  const navigate = useNavigate(); // Initialize useHistory hook

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/travellers/save', formData);
      console.log('Registration successful:', response.data);
      // Clear form fields after successful registration
      setFormData({
        fullName: '',
        email: '',
        phoneNo: '',
        source: '',
        destination: '',
        password: '',
      });

      // Navigate to TravellerAddress component
      navigate('/address');
    } catch (error) {
      console.error('Registration failed:', error);
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
    <div style={{ textAlign: 'center', backgroundColor: 'whitesmoke', height: '500px'}}>
      <h1 style={{marginTop:"30px"}}>Signup</h1>
      <form onSubmit={handleRegistration} style={{backgroundColor:"seagreen", marginLeft:"50px", marginRight:"50px", borderRadius:"8px", height:"380px" , boxShadow: "5px 10px 5px rgba(0, 0.6, 0, 0.7)"}}>
        <div className="row">
          <div className="col">
            <label style={{ marginRight: "200px" }}>Full Name:</label>
            <input type="text" className="form-control" placeholder="Enter Your Full Name" name="fullName" style={{ width: "400px", marginLeft: "150px" }} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "455px" }}>Email ID:</label>
            <input type="text" className="form-control" placeholder="Enter email" name="email" style={{ width: "400px", marginLeft: "20px" }} onChange={handleChange} />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <label style={{ marginRight: "135px" }}>Mobile Number:</label>
            <input type="number" className="form-control" placeholder="Enter mobile number" name="phoneNo" style={{ width: "400px", marginLeft: "150px" }} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "465px" }}>Source:</label>
            <input type="text" className="form-control" placeholder="Enter source" name="source" style={{ width: "400px", marginLeft: "20px" }} onChange={handleChange} />
          </div>
        </div>
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <label style={{ marginRight: "165px" }}>Destination:</label>
            <input type="text" className="form-control" placeholder="Enter destination" name="destination" style={{ width: "400px", marginLeft: "150px" }} onChange={handleChange} />
          </div>
          <div className="col">
            <label style={{ marginRight: "445px" }}>Password:</label>
            <input type="password" className="form-control" placeholder="Enter password" name="password" style={{ width: "400px", marginLeft: "20px" }} onChange={handleChange} />
          </div>
        </div>
        
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col">
            <label style={{ marginRight: "700px" }}>Confirm Password:</label>
            <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" style={{ width: "845px", marginLeft: "150px" }} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ marginTop: "20px", marginLeft:"600px", width:"100px" }}>Next</button>
      </form>
    </div>
  );
}

export default Register;

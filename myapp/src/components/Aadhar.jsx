import React, { useState } from 'react';
import axios from 'axios';

function Aadhar({ onRegister }) {
  const [aadharData, setAadharData] = useState({
    aadharNo: '',
    cardHolderName: '',
  });

  const handleAadharChange = (e) => {
    const { name, value } = e.target;
    setAadharData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/travellers/saveaadhar', aadharData); // Assuming the endpoint to save Aadhar data is '/aadhar/save'
      console.log('Registration successful:', response.data);
      // Clear form fields after successful registration
      setAadharData({
        aadharNo: '',
        cardHolderName: '',
      });
      alert("Registered successfylly");
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>Aadhar Details</h1>
      <form>
        <div className="row">
          <div className="col">
            <label>Aadhar Number:</label>
            <input type="text" className="form-control" placeholder="Enter Aadhar Number" name="aadharNo" value={aadharData.aadharNo} onChange={handleAadharChange} />
          </div>
          <div className="col">
            <label>Card Holder Name:</label>
            <input type="text" className="form-control" placeholder="Enter Card Holder Name" name="cardHolderName" value={aadharData.cardHolderName} onChange={handleAadharChange} />
          </div>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleRegister}>Register</button>
      </form>
    </div>
  );
}

export default Aadhar;

import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { Navigate, useNavigate } from 'react-router-dom';

function TravellerAddress({ onNext }) {
  const [addressData, setAddressData] = useState({
    houseno: '',
    location: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
  });

  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    onNext(addressData);
    navigate('/aadhar');
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/travellers/saveaddress', addressData);
      console.log('Registration successful:', response.data);
      // Clear form fields after successful registration
      setAddressData({
        houseno: '',
        location: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
      });

      // Navigate to Aadhar component
      navigate('/aadhar');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <h1>Traveller Address</h1>
      <form onSubmit={handleRegistration}>
        <div className="row">
          <div className="col">
            <label>House No:</label>
            <input type="text" className="form-control" placeholder="Enter House No" name="houseno" value={addressData.houseno} onChange={handleAddressChange} />
          </div>
          <div className="col">
            <label>Location:</label>
            <input type="text" className="form-control" placeholder="Enter Location" name="location" value={addressData.location} onChange={handleAddressChange} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>City:</label>
            <input type="text" className="form-control" placeholder="Enter City" name="city" value={addressData.city} onChange={handleAddressChange} />
          </div>
          <div className="col">
            <label>State:</label>
            <input type="text" className="form-control" placeholder="Enter State" name="state" value={addressData.state} onChange={handleAddressChange} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Country:</label>
            <input type="text" className="form-control" placeholder="Enter Country" name="country" value={addressData.country} onChange={handleAddressChange} />
          </div>
          <div className="col">
            <label>Pincode:</label>
            <input type="text" className="form-control" placeholder="Enter Pincode" name="pincode" value={addressData.pincode} onChange={handleAddressChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Next</button>
      </form>
    </div>
  );
}

export default TravellerAddress;

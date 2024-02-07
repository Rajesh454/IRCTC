// import React, { useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// function Login() {
//   const history = useHistory();
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('http://localhost:8080/login', formData);
//       console.log('Login successful:', response.data);
//       history.push('/userlist');
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input type="text" className="form-control" placeholder="Enter Email" name="email" value={formData.email} onChange={handleChange} />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input type="password" className="form-control" placeholder="Enter Password" name="password" value={formData.password} onChange={handleChange} />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

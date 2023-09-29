import React, { useState } from 'react';
import  './auth.css'

 export const Auth = () => {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle registration logic here (e.g., API call)
  // };

  return (
    <div className='container'
    style={{
        backgroundColor:'#E5E5E5'
    }}>
      <div>
      <div className='auth--heading--box'>
      <h2 className='auth__heading'>CRUD OPERATIONS</h2>
      </div>
      <p className='auth__text'>Sign In</p>
      <p className='auth__text1'>Enter your credentials to access your account</p>
      </div>
    <div className='auth--box'>
    <form >

     <div>
     <label for="email" id='email' name="email">Email
        <input
          type="email"
          name="email"
          id='email'
          // value={formData.email}
          // onChange={handleInputChange}
          placeholder="Enter your email"
        />
        </label>
     </div>
       <div>
       <input
          type="password"
          name="password"
          // value={formData.password}
          // onChange={handleInputChange}
          placeholder="Password"
        />
       </div>
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};
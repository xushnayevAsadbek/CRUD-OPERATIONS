import React, { useState } from 'react';
import './auth.css'

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
        backgroundColor: '#E5E5E5'
      }}>
     <div className='auth--card'>
     <div>
        <div className='auth--heading--box'>
          <h2 className='auth__heading'>CRUD OPERATIONS</h2>
        </div>
        <p className='auth__text'>Sign In</p>
        <p className='auth__text1'>Enter your credentials to access your account</p>
      </div>
      <div className='auth--box'>
        <form >

          <div className='auth--box__email'>
            <label className='auth--box__eamil-label'>
              Email <br />
              <input className='auth--box__eamil-input'
                type="email"
                name="email"
                id='email'
                required
                // value={formData.email}
                // onChange={handleInputChange}
                placeholder="Enter your email"
              />
            </label>
          </div>
          <div className='auth--box__password'>
            <label className='auth--box__password-label' >
              Password
              <br />
              <input className='auth--box__password-input'
                type="password"
                name="password"
                required
                // value={formData.password}
                // onChange={handleInputChange}
                placeholder="Enter your password"
              />
            </label>
          </div>
          <button type="submit" className='auth--box__btn'>SIGN IN</button>
        </form>
        <p className='auth--box__text'>
        Forgot your password? <span className='span'>Reset Password</span>
        </p>
      </div>
     </div>
    </div>
  );
};
import React, { useState } from 'react';
import '../../Styling/Form.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignInForm() {

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [usernameError, setUsernameError] = useState<String>('');

  const navigate = useNavigate();

  const handleChange = (fieldName: string, value: string) => {

    if (fieldName === 'username') {
      const usernameRegex = /^(?!.*[A-Z])[a-z0-9_]+$/;
  
      if (!value.match(usernameRegex)) {
        setUsernameError("Invalid username.");
      } else {
        setUsernameError('');
      }
    }

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const signin = async (userData: any) => {
    try {
      const response = await axios.post('http://localhost:5000/users/login', userData);
      alert(response.data.message);
      localStorage.setItem('jwt', response.data.token);
      navigate('/home');
    } catch (error: any) {
      alert(error.response.data.error);
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    signin(formData);
  };

  return (
    <div className="sign-in-form">
      <div className="center-content">
        <h2 className='title'>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              autoFocus
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              placeholder="Username"
              required
              style={{ borderColor: usernameError ? 'red' : '', 
              color: usernameError ? 'red' : '', }}
            />
            {usernameError && (
              <div className="error-message">
                {usernameError}
              </div>
            )}
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <button type="submit" className='sign-in-bttn'  disabled={usernameError.length>0}>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
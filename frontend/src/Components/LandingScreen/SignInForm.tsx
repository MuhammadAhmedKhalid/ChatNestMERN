import React, { useState } from 'react';
import '../../Styling/Form.css';

function SignInForm() {

  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (fieldName: string, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="sign-in-form">
      <div className="center-content">
        <h2 className='title'>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) => handleChange('username', e.target.value)}
              placeholder="Username"
              required
            />
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
            <button type="submit" className='sign-in-bttn'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
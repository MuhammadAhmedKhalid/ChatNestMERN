import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

function SignUpForm() {

  interface Country {
    value: string;
    label: string;
  }

  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [countries, setCountries] = useState<Country[]>([]);
  const [usernameError, setUsernameError] = useState<String>('');
  const [passwordError, setPasswordError] = useState<String>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<String>('');
  const [passwordStrength, setPasswordStrength] = useState<String>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
    age: '4-11',
    gender: 'male',
    country: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        const countryList = response.data.map((country: any) => ({
          value: country.alpha2Code,
          label: country.name,
        })) as Country[];
        setCountries(countryList);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } 
    };
    fetchCountries();
  }, []);

  

  const handleChange = (fieldName: string, value: string) => {

    if (fieldName === 'password') {
      if (value.length < 8) {
        setPasswordError('Password must be at least 8 characters long.');
        setPasswordStrength('Weak');
      } else if (value.length >= 8 && value.match(/[a-zA-Z]/) && value.match(/[0-9]/)) {
        setPasswordError('');
        setPasswordStrength('Strong');
      } else {
        setPasswordError('');
        setPasswordStrength('Moderate');
      }
    }

    if (fieldName === 'confirmPassword') {
      if (value !== formData.password) {
        setConfirmPasswordError('Passwords do not match');
        setPasswordsMatch(false);
      } else {
        setConfirmPasswordError('');
        setPasswordsMatch(true);
      }
    }

    if (fieldName === 'username') {
      const usernameRegex = /^(?!.*[A-Z])[a-z0-9_]+$/;
  
      if (!value.match(usernameRegex)) {
        setUsernameError(
          "Invalid username."
        );
      } else {
        setUsernameError('');
      }
    }

    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (passwordsMatch) {
      console.log(formData);
    }
  };

  return (
    <div className="sign-up-form">
    <div className="center-content">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            placeholder="Full Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group">
          <input
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
        <div className="options-group x-axis">
          <p className='form-p'>Age:</p>
          <select
            id="age"
            name="age"
            value={formData.age}
            onChange={(e) => handleChange('age', e.target.value)}
          >
            <option value="4-11">{'4-11'}</option>
            <option value="12-17">{'12-17'}</option>
            <option value="18+">{'18+'}</option>
          </select>
        </div>
        <div className="options-group x-axis">
          <p className='form-p'>Gender:</p>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={formData.gender === 'male'}
            onChange={() => handleChange('gender', 'male')}
          />
          <p className='form-p'>Male</p>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={formData.gender === 'female'}
            onChange={() => handleChange('gender', 'female')}
          />
          <p className='form-p'>Female</p>
        </div>
        <div className="form-group">
          <Select
            className='Select'
            placeholder="Select Country..."
            options={countries}
            value={selectedCountry}
            required
            onChange={(selectedOption: Country | null) => {
              if (selectedOption) {
                setSelectedCountry(selectedOption);
                handleChange('country', selectedOption.label);
              }
            }}
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
            style={{ borderColor: passwordError ? 'red' : '' }}
          />
          {passwordError && (
            <div className="error-message" style={{ color: 'red' }}>
              {passwordError}
            </div>)
          }
          {passwordStrength && (
            <div className={`password-strength ${passwordStrength.toLowerCase()}`}>
              {passwordStrength} Password.
            </div>)
          }
        </div>
        <div className="form-group">
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={(e) => handleChange('confirmPassword', e.target.value)}
            placeholder="Re-enter Password"
            required
            style={{ borderColor: confirmPasswordError ? 'red' : '' }}
          />
          {confirmPasswordError && (
            <div className="error-message">
              {confirmPasswordError}
            </div>)
          }
        </div>
        <div className="form-group">
          <button type="submit" disabled={!passwordsMatch}>Sign Up</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SignUpForm
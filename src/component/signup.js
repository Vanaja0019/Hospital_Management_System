import React, { useState } from 'react';

function Signup({ handleFormSubmit }) {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValid = emailRegex.test(value);

      setErrors({ ...errors, email: isValid ? '' : 'Please enter a valid email' });
    }

    if (name === 'password') {
      setErrors({ ...errors, password: value.trim() !== '' ? '' : 'Please enter a password' });
    }

    if (name === 'confirmPassword') {
      const isValid = value === formData.password;
      setErrors({ ...errors, confirmPassword: isValid ? '' : 'Passwords do not match' });
    }

    if (name === 'username') {
      setErrors({ ...errors, username: value.trim() !== '' ? '' : 'Please enter a username' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(formData.email);

    const isValidPassword = formData.password.trim() !== '';

    const isValidConfirmPassword = formData.confirmPassword === formData.password;

    const isValidUsername = formData.username.trim() !== '';

    setErrors({
      email: isValidEmail ? '' : 'Please enter a valid email',
      password: isValidPassword ? '' : 'Please enter a password',
      confirmPassword: isValidConfirmPassword ? '' : 'Passwords do not match',
      username: isValidUsername ? '' : 'Please enter a username',
    });

    if (isValidEmail && isValidPassword && isValidConfirmPassword && isValidUsername) {
      console.log('Form submitted:', formData);
      handleFormSubmit(formData); 
    }
  };

  return (
    <form className="inside_form" onSubmit={handleSubmit}>
      <div className="frm_grp">
        <label>Username</label>
        <input
          className="frm_fld"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <span className={`error ${errors.username ? 'invalid' : ''}`}>{errors.username}</span>
      </div>
      <div className="frm_grp">
        <label>Email</label>
        <input
          className="frm_fld"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <span className={`error ${errors.email ? 'invalid' : ''}`}>{errors.email}</span>
      </div>
      <div className="frm_grp">
        <label>Password</label>
        <input
          className="frm_fld"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <span className={`error ${errors.password ? 'invalid' : ''}`}>{errors.password}</span>
      </div>
      <div className="frm_grp">
        <label>Confirm Password</label>
        <input
          className="frm_fld"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <span className={`error ${errors.confirmPassword ? 'invalid' : ''}`}>{errors.confirmPassword}</span>
      </div>
      <button className="sbmt_btn" type="submit">Submit</button>
    </form>
  );
}

export default Signup;

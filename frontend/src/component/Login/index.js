import React from 'react';
import './index.css';


function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      
      <div className="input-container">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
      </div>
      
      <div className="input-container">
        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />
      </div>

      <button>Login</button>

      <div className="links-container">
        <a href="/forgot-password">Forgot password?</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}

export default LoginPage;

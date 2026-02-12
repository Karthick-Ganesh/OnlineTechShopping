import React, { useState } from 'react';
import { useUser } from './UserContext';
import './LoginPage.css';

const LoginPage = () => {
  const { login, signup } = useUser();

  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setMessage('');

    let result;
    if (isSignup) {
      result = signup(username, password);
    } else {
      result = login(username, password);
    }

    if (!result.success) {
      setMessage(result.message);
    }
    // If success, UserContext updates currentUser and App will render the shop
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-logo">TechStore</h1>
        <p className="login-subtitle">
          {isSignup ? 'Create your account' : 'Sign in to your account'}
        </p>

        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Username"
            className="login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* Error / info message */}
          {message && <p className="login-message">{message}</p>}

          <button type="submit" className="login-btn">
            {isSignup ? 'Sign Up' : 'Log In'}
          </button>
        </form>

        <p className="login-switch">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span
            onClick={() => {
              setIsSignup(!isSignup);
              setMessage('');
            }}
          >
            {isSignup ? 'Log In' : 'Sign Up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
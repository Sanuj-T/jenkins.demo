import React from 'react';
import './App.css';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    alert("Login submitted!");
  };

  return (
    <div className="container">
      <h1>Facebook</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="text" placeholder="Email or Phone Number" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <div className="links">
          {/* jndjc */}
          <a href="#">Forgotten password?</a>
          <a href="#">Create New Account</a>
        </div>
      </form>
    </div>
  );
}

export default App; 
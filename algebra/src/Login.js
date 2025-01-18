import React, { useState } from 'react';
import { auth } from './firebase'; // Assuming firebase is configured in firebase.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import RegisterPage from './Register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Login successful');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>

      <p>
        Don't Have and Account? <Link to='./Register'>Register</Link>
      </p>
    </div>
  );
};

export default Login;

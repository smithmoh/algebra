
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import { auth } from './firebase';
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import Dashboard from './Dashboard';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const login = async () => {
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       alert('Logged in successfully');
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={login}>Login</button>
//       <p>
//         Don’t have an account? <Link to="/register">Register here</Link>
//       </p>
//     </div>
//   );
// };

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const register = async () => {
//     try {
//       await createUserWithEmailAndPassword(auth, email, password);
//       alert('Registration successful');
//       navigate('/');
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div>
//       <h1>Register</h1>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={register}>Register</button>
//     </div>
//   );
// };

// const App = () => {
//   const [user, setUser] = useState(null);

//   onAuthStateChanged(auth, (currentUser) => {
//     setUser(currentUser);
//   });

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import Dashboard from './Dashboard';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert('Logged in successfully');
      navigate('/dashboard');
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
      <button onClick={login}>Login</button>
      <p>
        Don’t have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
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
      <button onClick={register}>Register</button>
    </div>
  );
};

const App = () => {
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

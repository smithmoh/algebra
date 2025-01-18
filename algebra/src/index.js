// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import LoginPage from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <LoginPage />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' in React 18
import LoginPage from './App'; // Adjust the import path as needed

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root
root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
)


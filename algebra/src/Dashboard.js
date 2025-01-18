import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh'}}>
      <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{paddingTop: '30px'}}>Dashboard</h2>
          <Link to = '/dashboard/challenges'>Challenges</Link> <br/>
          {/* Add other sidebar links here */}
        </div>
        <div>
          <Link to="/dashboard/profile">User Profile</Link>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        <h1 style={{paddingTop: '20px'}}>Welcome to the Dashboard</h1>
        {/* Add dashboard content here */}
      </main>
    </div>
  );
};

export default Dashboard;
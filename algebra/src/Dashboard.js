// import React from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   return (
//     <div style={{ display: 'flex', height: '100vh'}}>
//       <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <div>
//           <h2 style={{paddingTop: '30px'}}>Dashboard</h2>
//           <Link to = '/dashboard/challenges'>Challenges</Link> <br/>
//           {/* Add other sidebar links here */}
//         </div>
//         <div>
//           <Link to="/dashboard/profile">User Profile</Link>
//         </div>
//       </aside>
//       <main style={{ flex: 1, padding: '20px' }}>
//         <h1 style={{paddingTop: '20px'}}>Welcome to the Dashboard</h1>
//         {/* Add dashboard content here */}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [topics, setTopics] = useState(["Set Theory"]);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <div>
//           <h2>Dashboard</h2>
//           <details>
//             <summary>Topics</summary>
//             {topics.map((topic, index) => (
//               <p key={index} style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => setSelectedTopic(topic)}>
//                 {topic}
//               </p>
//             ))}
//           </details>
//         </div>
//         <div>
//           <Link to="/profile">User Profile</Link>
//         </div>
//       </aside>
//       <main style={{ flex: 1, padding: '20px' }}>
//         {selectedTopic ? (
//           <div>
//             <h1>{selectedTopic}</h1>
//             <p>Here are the questions for {selectedTopic}:</p>
//             <ul>
//               <li>Question 1</li>
//               <li>Question 2</li>
//               <li>Question 3</li>
//             </ul>
//           </div>
//         ) : (
//           <h1>Welcome to the Dashboard</h1>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;
// $$$$$$$$$$$$$$$$
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//   const [topics, setTopics] = useState(["Set Theory"]);
//   const [selectedTopic, setSelectedTopic] = useState(null);

//   return (
//     <div style={{ display: 'flex', height: '100vh' }}>
//       <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//         <div>
//           <h2>Dashboard</h2>
//           <details>
//             <summary>Topics</summary>
//             {topics.map((topic, index) => (
//               <p key={index} style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => setSelectedTopic(topic)}>
//                 {topic}
//               </p>
//             ))}
//           </details>
//           <Link to="/progress" style={{ textDecoration: 'none', color: 'blue', marginTop: '20px' }}>Progress</Link>
//         </div>
//         <div>
//           <Link to="/profile">User Profile</Link>
//         </div>
//       </aside>
//       <main style={{ flex: 1, padding: '20px' }}>
//         {selectedTopic ? (
//           <div>
//             <h1>{selectedTopic}</h1>
//             <p>Here are the questions for {selectedTopic}:</p>
//             <ul>
//               <li>Question 1</li>
//               <li>Question 2</li>
//               <li>Question 3</li>
//             </ul>
//           </div>
//         ) : (
//           <h1>Welcome to the Dashboard</h1>
//         )}
//       </main>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [topics, setTopics] = useState(["Set Theory"]);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showProgress, setShowProgress] = useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <aside style={{ width: '250px', background: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h2>Dashboard</h2>
          <details>
            <summary>Topics</summary>
            {topics.map((topic, index) => (
              <p key={index} style={{ marginLeft: '20px', cursor: 'pointer' }} onClick={() => { setSelectedTopic(topic); setShowProgress(false); }}>
                {topic}
              </p>
            ))}
          </details>
          <p style={{ marginTop: '20px', cursor: 'pointer' }} onClick={() => { setSelectedTopic(null); setShowProgress(true); }}>
            Progress
          </p>
        </div>
        <div>
          <Link to="/profile">User Profile</Link>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '20px' }}>
        {selectedTopic ? (
          <div>
            <h1>{selectedTopic}</h1>
            <p>Here are the questions for {selectedTopic}:</p>
            <ul>
              <li>Question 1</li>
              <li>Question 2</li>
              <li>Question 3</li>
            </ul>
          </div>
        ) : showProgress ? (
          <div>
            <h1>Progress</h1>
            <p>Daily Streak: Placeholder</p>
            <p>Points Earned: Placeholder</p>
            <p>Topics Handled: Placeholder</p>
          </div>
        ) : (
          <h1>Welcome to the Dashboard</h1>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
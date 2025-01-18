// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from "react";

function Sets({ sets, onComplete }) {
  return (
    <div>
      <h3>Available Sets</h3>
      <ul>
        {sets.map((set) => (
          <li key={set._id}>
            {set.name} - {set.points} points
            <button onClick={() => onComplete(set._id)}>Complete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sets;

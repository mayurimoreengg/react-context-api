import React, { createContext, useState } from 'react';
import './style.css';
import ComponentA from './components/ComponentA';

const User = createContext();

export default function App() {
  const [username, setUsername] = useState('Mayuri');
  const [clicks, setClicks] = useState(true);
  const handleChangeUser = () => {
    if (clicks === true) {
      setUsername('Nisha');
    } else {
      setUsername('Mayuri');
    }
    setClicks(!clicks);
  };
  return (
    <div>
      <h1>
        Hello {username}!{' '}
        <button className="changeUserBtn" onClick={handleChangeUser}>
          Change User
        </button>
      </h1>
      <User.Provider value={username}>
        <ComponentA />
      </User.Provider>
    </div>
  );
}

export { User };

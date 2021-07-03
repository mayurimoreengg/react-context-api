import React from 'react';
import { User } from '../App';

const ComponentC = () => {
  return (
    <User.Consumer>
      {username => {
        return (
          <div className="myComponent">
            <h1>ComponentC</h1>
            <p>Accessing prop from App component here.. Hi {username}</p>
          </div>
        );
      }}
    </User.Consumer>
  );
};

export default ComponentC;

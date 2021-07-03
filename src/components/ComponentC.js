import React from 'react';
import { User, Subject } from '../App';

const ComponentC = () => {
  return (
    <User.Consumer>
      {username => {
        return (
          <Subject.Consumer>
            {sub => {
              return (
                <div className="myComponent">
                  <h1>ComponentC</h1>
                  <p>Accessing prop from App component here.. Hi {username}</p>
                  <p>My favourite subject is {sub}</p>
                </div>
              );
            }}
          </Subject.Consumer>
        );
      }}
    </User.Consumer>
  );
};

export default ComponentC;

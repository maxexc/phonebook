import React from 'react'


const App = () => {
  return (
    <div>
      <header style={{
          height: '40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}>
      <navigation>HOME </navigation>
      <div> 
        <span>Register  </span> 
        <span>Login</span> 
      </div>
     
      </header>
      <br />
      <hr />
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template 8 Final Task
      </div>
    </div>
  );
};

export default App;
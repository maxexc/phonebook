import { Layout } from 'components/Layout/Layout';
import React from 'react'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <header style={{
            height: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101'
          }}>
        <div>HOME </div>
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
        </div> */}
      </Route>
    </Routes>
  );
};

export default App;
import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home';
import LoginView from 'pages/Login';
import React from 'react'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      {/* <Route index element={<Home/>}/>
        <Route path="/login" element={<LoginView />} /> */}

        
      </Route>
    </Routes>
  );
};

export default App;
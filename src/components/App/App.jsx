import { Layout } from 'components/Layout/Layout';
import Home from 'pages/Home';
import LoginView from 'pages/Login';
import Register from 'pages/Register';
import React from 'react'
import { Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<Register />} />

        
      </Route>
    </Routes>
  );
};

export default App;
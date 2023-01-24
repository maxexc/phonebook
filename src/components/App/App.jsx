import React from 'react'
import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';


import Home from 'pages/Home';
import LoginView from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<LoginView />} />
        <Route path="/register" element={<Register />} />
        <Route path='/contacts' element={<Contacts />} />        
      </Route>
    </Routes>
  );
};

export default App;
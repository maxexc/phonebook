import React, { useEffect } from 'react'
import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
// import { selectIsRefreshing } from 'redux/auth/selectors';


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  // const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    isRefreshing ? (
      'Fetching user data...'
    ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/contacts' element={<Contacts />} />        
      </Route>
    </Routes>
  ));
};

export default App;
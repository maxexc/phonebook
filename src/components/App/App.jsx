import React, { useEffect } from 'react'
import { Layout } from 'components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'Hooks';

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Contacts from 'pages/Contacts';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <>
    {/* <RestrictedRoute */}
      {isRefreshing ? (
        'Fetching user data...'
      ) : (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/login" 
            element={<RestrictedRoute component={Login} redirectTo='/contacts' />} />
          <Route path="/register" 
            element={<RestrictedRoute component={Register} redirectTo='/contacts' />} />
          <Route path='/contacts' element={<Contacts />} />        
        </Route>
      </Routes>
      )}
    </>);
};

export default App;
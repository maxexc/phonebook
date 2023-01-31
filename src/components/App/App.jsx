import React, { lazy, useEffect } from 'react'
import { Layout } from 'components/Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'Hooks';
import { RestrictedRoute } from 'components/RestrictedRoute/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';


const Home = lazy(() => import('../../pages/Home'));
const Login = lazy(() => import('../../pages/Login'));
const Register = lazy(() => import('../../pages/Register'));
const Contacts = lazy(() => import('../../pages/Contacts'));


const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])

  return (
    <>
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
          <Route path='/contacts' 
            element={<PrivateRoute component={Contacts} redirectTo='/login' />} /> 
          <Route path="*" element={<Navigate to="/" />} />   
        </Route>
      </Routes>
      )}
    </>);
};

export default App;
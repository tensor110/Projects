import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'login', element: <Login /> },
    { path: 'signup', element: <Signup /> },
    { path: 'forgot-password', element: <ForgotPassword /> },
    { path: 'reset-password', element: <ResetPassword /> },
  ]);

  return routes;
}

export default Routes;
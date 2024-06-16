import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login'

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'login', element: <Login /> },
  ]);

  return routes;
}

export default Routes;
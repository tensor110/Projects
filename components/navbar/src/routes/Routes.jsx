import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import About from '../screens/About';
import Products from '../screens/Products';
import Contact from '../screens/Contact';
import Login from '../screens/Login'

function Routes() {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: 'about', element: <About /> },
    { path: 'products', element: <Products /> },
    { path: 'contact', element: <Contact /> },
    { path: 'login', element: <Login /> },
  ]);

  return routes;
}

export default Routes;

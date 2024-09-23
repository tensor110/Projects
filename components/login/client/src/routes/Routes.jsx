import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import Home from '../screens/Home';
import Login from '../screens/Login'
import Signup from '../screens/Signup';
import ForgotPassword from '../screens/ForgotPassword';
import ResetPassword from '../screens/ResetPassword';
import Profile from '../screens/Profile';
import RefreshHandler from './RefreshHandler';

function Routees() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />
  }
  return (
    <div>
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
      </Routes>
    </div>
  )
}

export default Routees;
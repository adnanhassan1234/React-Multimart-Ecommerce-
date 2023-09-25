import React from 'react';
import { Navigate } from 'react-router-dom'; 
import useAuth from '../CustomHook/useAuth';

const ProtectedRoute = ({ children }) => {
  const { currUser } = useAuth();
  return currUser ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

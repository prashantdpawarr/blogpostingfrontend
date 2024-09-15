import React from "react";
import { Navigate } from "react-router-dom";

const isAuthtenicated = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

const PrivateRoute = ({ children }) => {
  return isAuthtenicated() ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

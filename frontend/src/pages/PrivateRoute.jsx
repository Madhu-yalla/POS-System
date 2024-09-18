import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth);

  if (user) return children;

  return <Navigate to="/cart" />;
};

export default PrivateRoute;

import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "./auth";

export const PrivateRoute = ({ children }) => {
  const isAuthentication = getToken();


  if (!isAuthentication) {
    return <Navigate to="/admin/login"  replace />;
  }

  return children;
};

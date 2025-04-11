// components/ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (!storedUser || !storedUser.email || !storedUser.password) {
    return <Navigate to="/pages/login" />;
  }

  return children;
};

export default ProtectedRoute;

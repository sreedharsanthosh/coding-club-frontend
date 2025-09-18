import { Navigate, Outlet } from "react-router-dom";

const ProtectedUserRoute = () => {
  const userToken = localStorage.getItem("user");

  return userToken ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedUserRoute;

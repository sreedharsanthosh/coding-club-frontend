import { Navigate, Outlet } from "react-router-dom";

const ProtectedUserRoute = () => {
  const userToken = localStorage.getItem("CCUserToken");

  return userToken ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedUserRoute;

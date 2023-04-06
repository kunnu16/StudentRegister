import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = localStorage.getItem("Token");

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

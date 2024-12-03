import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated } = useAuth();  // Now it correctly gets the 'isAuthenticated' property

  if (!isAuthenticated) {
    return <Navigate to="/signIn" />;
  }

  return children;
};

export default PrivateRoute;

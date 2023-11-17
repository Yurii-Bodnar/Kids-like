import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { selectToken } from "../../redux/auth/authSelectors";

interface IPrivateRouteProps {
  redirectPath?: string;
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  redirectPath = "/auth",
}) => {
  const isAuth = useAppSelector(selectToken);
  isAuth ? <Outlet /> : <Navigate to={redirectPath} />;
};

export default PrivateRoute;

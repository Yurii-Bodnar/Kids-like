import React from "react";
import { useAppSelector } from "../../hooks/hooks";
import { selectToken } from "../../redux/auth/authSelectors";
import { PropsForPublicRoute } from "../../types/types";
import { Navigate } from "react-router-dom";

// const PublicRoute: React.FC<PropsForPublicRoute> = ({
//   component,
//   redirectTo = "/",
// }) => {
//   const isLoggedIn = useAppSelector(selectToken);

//   return !isLoggedIn ? component : <Navigate to={redirectTo} />;
// };

// export default PublicRoute;

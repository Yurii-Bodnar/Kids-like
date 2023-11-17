import React, { Suspense, lazy, useEffect } from "react";
import Loader from "./Loader/Loader";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../hooks/hooks";
import { selectToken } from "../redux/auth/authSelectors";

export const App: React.FunctionComponent = () => {
  const AuthPage = lazy(() => import("../pages/AuthPage/AuthPage"));
  const AwardsPage = lazy(() => import("../pages/AwardsPage/AwardsPage"));
  const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
  const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
  const PlanningPage = lazy(() => import("../pages/PlanningPage/PlanningPage"));

  const isAuth = useAppSelector(selectToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/auth");
    }
  }, [isAuth, navigate]);
  return (
    <Suspense fallback={<Loader />}>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/awards" element={<AwardsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/planning" element={<PlanningPage />} />
        </Route>
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Suspense>
  );
};

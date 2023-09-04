import React, { Suspense, lazy } from "react";
import Loader from "./Loader/Loader";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const App: React.FunctionComponent = () => {
  const AuthPage = lazy(() => import("../pages/AuthPage/AuthPage"));
  const AwardsPage = lazy(() => import("../pages/AwardsPage/AwardsPage"));
  const ContactsPage = lazy(() => import("../pages/ContactsPage/ContactsPage"));
  const MainPage = lazy(() => import("../pages/MainPage/MainPage"));
  const PlanningPage = lazy(() => import("../pages/PlanningPage/PlanningPage"));
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

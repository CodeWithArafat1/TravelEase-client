import React, { memo } from "react";
import { useSelector } from "react-redux";
import FullLoader from "../components/shared/loader/FullLoader";
import { Navigate, useLocation } from "react-router";

const PrivetRoutes = ({ children }) => {
  const { user, userLoading } = useSelector((store) => store.userAuth);
  const location = useLocation();

  if (userLoading) {
    return <FullLoader />;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
  return children;
};

export default memo(PrivetRoutes);

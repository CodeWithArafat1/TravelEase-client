import React, { memo } from "react";
import { useSelector } from "react-redux";
import FullLoader from "../components/shared/loader/FullLoader";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/shared/loader/Loading";

const PrivetRoutes = ({ children }) => {
  const { user, userLoading } = useSelector((store) => store.userAuth);
  const location = useLocation();

  if (userLoading) {
    return <Loading/>;
  }
  if (!user) {
    return <Navigate state={location.pathname} to="/auth/login" />;
  }
  return children;
};

export default memo(PrivetRoutes);

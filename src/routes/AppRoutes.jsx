import { createBrowserRouter, RouterProvider } from "react-router";
import React, { lazy, memo } from "react";
import App from "../App";

const Home = lazy(() => import("../pages/Home"));
const AllVehicles = lazy(() => import("../pages/AllVehicles"));

const AddVehicle = lazy(() => import("../pages/AddVehicle"));
const MyVehicles = lazy(() => import("../pages/MyVehicles"));
const MyBookings = lazy(() => import("../pages/MyBookings"));
const ViewDetails = lazy(() => import("../pages/ViewDetails"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));
const NotFound = lazy(() => import("../pages/NotFound"));
import PrivetRoutes from "../privetRoutes/PrivetRoutes";
import UpdateVehicle from "../pages/UpdateVehicle";
import MyWishlist from "../pages/MyWishlist";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allVehicles",
        Component: AllVehicles,
      },
      {
        path: "/addVehicles",
        element: (
          <PrivetRoutes>
            <AddVehicle />
          </PrivetRoutes>
        ),
      },
      {
        path: "/myVehicles",
        element: (
          <PrivetRoutes>
            <MyVehicles />
          </PrivetRoutes>
        ),
      },
      {
        path: "/myBookings",
        element: (
          <PrivetRoutes>
            <MyBookings />
          </PrivetRoutes>
        ),
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivetRoutes>
            <ViewDetails />
          </PrivetRoutes>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRoutes>
            <UpdateVehicle />
          </PrivetRoutes>
        ),
      },
      {
        path: "/myWishlist",
        element: (
          <PrivetRoutes>
            <MyWishlist />
          </PrivetRoutes>
        ),
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default memo(AppRoutes);

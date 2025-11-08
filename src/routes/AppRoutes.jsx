import { createBrowserRouter, RouterProvider } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import AllVehicles from "../pages/AllVehicles";
import AddVehicle from "../pages/AddVehicle";
import MyVehicles from "../pages/MyVehicles";
import MyBookings from "../pages/MyBookings";
import ViewDetails from "../pages/ViewDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

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
        Component: AddVehicle,
      },
      {
        path: "/myVehicles",
        Component: MyVehicles,
      },
      {
        path: "/myBookings",
        Component: MyBookings,
      },
      {
        path: "/viewDetails/:id",
        Component: ViewDetails,
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
    path: '*',
    Component: NotFound
  }
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;

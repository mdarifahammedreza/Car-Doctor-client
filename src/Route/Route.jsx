import { Outlet, createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Loader from "../Components/Loader/Loader";
import Home from "../Pages/Home/Home";
import LoginC from "../Pages/Login/LoginC";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/user",
    element: <Outlet />,
    children: [
      {
        path: "/user/sign-up",
        element: <SignUp />,
      },
      {
        path: "/user/sign-in",
        element: <LoginC />,
      },
    ],
  },
]);

export default router;

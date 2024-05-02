import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Loader from "../Components/Loader/Loader";
import Home from "../Pages/Home/Home";
import LoginC from "../Pages/Login/LoginC";

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
    path: "/login",
    element: <LoginC />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // ],
  },
]);

export default router;

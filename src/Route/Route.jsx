import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Loader from "../Components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //     children:[{
    // path:
    //     },]
  },
]);

export default router;

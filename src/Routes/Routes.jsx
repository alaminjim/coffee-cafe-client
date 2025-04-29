import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Quires from "../Pages/Quires";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/quires",
        element: <Quires></Quires>,
      },
    ],
  },
]);

export default router;

import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home";
import Quires from "../Pages/Quires";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddQuires from "../Pages/AddQuires";
import ErrorPage from "../Pages/ErrorPage";
import UpdateCoffee from "../Pages/UpdateCoffee";
import CoffeeDetails from "../Pages/CoffeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/quires",
        element: <Quires></Quires>,
      },
      {
        path: "/add-quires",
        element: <AddQuires></AddQuires>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <UpdateCoffee></UpdateCoffee>,
      },
      {
        path: "/details/:id",
        element: <CoffeeDetails></CoffeeDetails>,
      },
    ],
  },
]);

export default router;

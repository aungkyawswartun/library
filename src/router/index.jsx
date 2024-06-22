import { createBrowserRouter } from "react-router-dom";
import Create from "../pages/Create";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Layout from "../pages/layouts/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
        {
            path : "",
            element : <Home/>
        },
        {
            path : "/create",
            element : <Create/>
        },
        {
            path : "/search",
            element : <Search/>
        },
    ]
  },
]);

export default router;
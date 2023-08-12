import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Add from "../pages/Add/Add";
import Update from "../pages/Update/Update";
import Page from "../pages/Page/Page";
import ErrorPage from "../Components/ErroPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/add",
        element: <Add></Add>
      },
      {
        path: "/page",
        element: <Page></Page>
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: (({ params }) => fetch(`http://localhost:5000/update/${params.id}`))
      },

      
    ]


  },
  

]);

export default router;
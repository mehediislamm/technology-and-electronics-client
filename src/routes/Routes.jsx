import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../component/error/Error";
import Home from "../component/home/Home";
import AddProducts from "../component/addProducts/AddProducts";
import Login from "../component/login/Login";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root> ,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addproducts',
            element:<AddProducts></AddProducts>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
      ]
    },
  ]);

export default router;
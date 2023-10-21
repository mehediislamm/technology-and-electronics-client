import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Error from "../component/error/Error";
import Home from "../component/home/Home";
import AddProducts from "../component/addProducts/AddProducts";
import Login from "../component/login/Login";
import UpdateProducts from "../component/updateProducts/UpdateProducts";
import Register from "../component/login/Register";
import AllCards from "../component/allCards/AllCards";
import Details from "../component/details/Details";
import Cards from "../component/cards/Cards";
import MyCart from "../component/myCart/MyCart";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/allCards`),
      },
      {
        path: '/addproducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/mycart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => {
          
          return fetch (`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/addCard`)
        }
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/updateproducts/:id',
        element: <UpdateProducts></UpdateProducts>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/productsBrand/${params.id}`)
        }
      },

      {
        path: '/allcards/:brand_name',
        element: <AllCards></AllCards>,
        loader: ({ params }) => {
          console.log(params);
          return fetch(`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/brand/${params.brand_name}`)
        }
      },
      {
        path: '/cards',
        element: <Cards></Cards>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://brand-shop-ky46ie1gc-mehediislamm.vercel.app/productsBrand/${params.id}`)
      },

    ]
  },
]);

export default router;
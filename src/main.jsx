import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/ErrorPage/Errorpage';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Dashboard from './components/Dashboard/Dashboard';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { ToastContainer, toast } from 'react-toastify';
import {  HelmetProvider } from 'react-helmet-async';
import Reviews from './components/Reviews/Reviews';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/products/:id',
        element:<ProductDetails></ProductDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/reviews',
        element:<Reviews></Reviews>,
      }

      
    ]
  },

  

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <HelmetProvider>
  <RouterProvider router={router} />
  </HelmetProvider>

  <ToastContainer/>
    </StrictMode>,
)

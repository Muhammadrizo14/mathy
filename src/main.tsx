import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import router from "./Routes";



ReactDOM.createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

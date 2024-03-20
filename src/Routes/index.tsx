import {createBrowserRouter} from "react-router-dom";
import Index from "../Pages/Home";
import FastTest from "../Pages/FastTest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/fast-test",
    element: <FastTest/>,
  },
]);


export default router
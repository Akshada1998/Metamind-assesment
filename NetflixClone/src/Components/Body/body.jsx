import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Login } from "../Login/login.jsx";
import HomePage from "../Browse/homePage.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login />,
    },
    {
      path: "/homepage",
      element: <HomePage  />,
    },
  ]);
  return <RouterProvider router={appRouter} />;
};

export default Body;

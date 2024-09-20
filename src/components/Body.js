import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return <RouterProvider router={myRouter} />;
};

export default Body;

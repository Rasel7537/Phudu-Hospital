import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("doctorData.json"),
        path: "/",
        Component: Home,
      },
      {
        path:'/about',
        Component:About,
      },
      {
        path:"/doctorDetails/:id",
        loader: () => fetch("./doctorData.json"),
        Component: DoctorDetails,
      }
    ],
  },
]);

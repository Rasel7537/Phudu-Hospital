import React, { Component } from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import DoctorDetails from "../pages/doctorDetails/DoctorDetails";
import Booking from "../pages/Booking/Booking";
import DoctorBooking from "../pages/DoctorBooking/DoctorBooking";
import MyBooking from "../pages/myBooking/MyBooking";
import Blogs from "../pages/Blogs/Blogs";
import Spinner from "../pages/spinner/Spinner";
import Contact from "../pages/Contact/Contact";
// import ReadList from "../pages/ReadList/ReadList";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch("/doctorData.json"),
        path: "/",
        Component: Home,
        hydrateFallbackElement: <Spinner></Spinner>
      },
      {
        path:'/about',
        Component:About,
      },
      // {
      //   path:"readlist",
      //   loader: () => fetch("doctorData.json"),
      //   Component:ReadList
      // },
     
      {
        path:"blogs",
        Component: Blogs
      },
      {
        path:"myBooking",
        Component: MyBooking
      },
      {
        path:"booking",
        Component: Booking
      
      },
      {
       path:'/doctorBooking/:id',
       loader: () => fetch("/doctorData.json"),
       Component:DoctorBooking,
       hydrateFallbackElement: <Spinner></Spinner>
      },
      {
        path:"/doctorDetails/:id",
        loader: () => fetch("/doctorData.json"),
        Component: DoctorDetails,
        hydrateFallbackElement: <Spinner></Spinner>
      }
    ],
  },
]);

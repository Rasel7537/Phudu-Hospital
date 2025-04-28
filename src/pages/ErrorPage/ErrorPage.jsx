import React from 'react';
import logoImage from "../../assets/logo (1).png";
import { Link, NavLink } from 'react-router';
const ErrorPage = () => {
  return (
    <div>
            <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg> */}
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-fuchsia-600" : ""
                }
              >
                Home.....
              </NavLink>
            </li>
            <li>
              <a>My-Bookings</a>
            </li>
            <li>
              <a>Blogs</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <img className="w-10" src={logoImage} alt="" />
        <a className="btn btn-ghost text-xl">Phudu</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-600"
            }
          >
            <li>
              <a>Home</a>
            </li>
          </NavLink>

          <NavLink to={"./myBooking"}
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "text-gray-600"
          }>
            <li>
              <a>My-Bookings</a>
            </li>
          </NavLink>
          <NavLink to={"./Blogs"} className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold" : "text-gray-600"
            } >
            <li>
              <a>Blogs</a>
            </li>
          </NavLink>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full bg-[#176AE5] text-white">Emergency</a>
      </div>
    </div>
    <div className='text-center mt-48  ' > 
         <h1 className='text-3xl font-bold text-red-500'  >404 - page  not found </h1>
         <p className='mt-4'>opps! the page you are looking for does't exist</p>
         <Link to={'/'}><button className='btn mt-2 bg-blue-500 text-white'>Book an Appoinment</button></Link>
    </div>
    </div>
  );
};

export default ErrorPage;
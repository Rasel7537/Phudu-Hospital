import React from "react";
import { Link, NavLink } from "react-router";
import logoImage from "../../assets/logo (1).png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
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
            </svg>
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
                Home
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
          <Link to={"/"}>
            <li>
              <a>Home</a>
            </li>
          </Link>

          <Link to={"./myBooking"}>
            <li>
              <a>My-Bookings</a>
            </li>
          </Link>
           <Link to={"./Blogs"}>
          <li>
            <a>Blogs</a>
          </li>
          </Link>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-full bg-[#176AE5] text-white">Emergency</a>
      </div>
    </div>
  );
};

export default Navbar;

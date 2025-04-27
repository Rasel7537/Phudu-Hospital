import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logoImage from "../../assets/logo (1).png";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-primary-content p-10 border rounded-2xl shadow-2xl">
      <aside>
        <div className="flex justify-around items-center gap-2">
          <img className="w-7" src={logoImage} alt=""  />
          <a className=" text-xl text-black font-semibold">Phudu</a>
        </div>
      </aside>
      <div className="flex justify-center items-center gap-3 text-[#0F0F0F] font-semibold ">
        <p>Home</p>
        <p>My-Bookings</p>
        <p>Blogs</p>
        <p>Contact Us</p>
      </div>
      <div className="flex justify-center items-center gap-3 border-t-2 border-dashed border-black w-full pt-7  ">
        < FaFacebook className="text-black size-6" />
        <FaGithub className="text-black size-6"/>
        <FaInstagram className="text-black size-6"/>
        <FaYoutube className="text-black size-6" />
      </div>
    </footer>
  );
};

export default Footer;

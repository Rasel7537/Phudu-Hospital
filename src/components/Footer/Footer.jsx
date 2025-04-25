import React from "react";
import logoImage from "../../assets/logo (1).png";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-white text-primary-content p-10 border">
      <aside>
        <div className="flex justify-around items-center gap-2">
          <img className="w-7" src={logoImage} alt="" srcset="" />
          <a className=" text-xl text-black font-semibold">Phudu</a>
        </div>
      </aside>
       <div className="flex justify-center items-center gap-3 text-[#0F0F0F] font-semibold ">
        <p>Home</p>
        <p>My-Bookings</p>
        <p>Blogs</p>
        <p>Contact Us</p>
       </div>
    </footer>
  );
};

export default Footer;

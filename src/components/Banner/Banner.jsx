import React from "react";
import bannerImage from "../../assets/banner-img-1.png";
const Banner = () => {
  return (
    <div className="pt-10 bg-base-200 min-h-screen my-2 shadow-2xl border-4 rounded-3xl border-white">
      <div className="text-center">
        <div className="">
          <h1 className="text-4xl font-bold">
            Dependable Care, Backed by Trusted <br /> Professionals.
          </h1>
          <p className="py-6">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a <br />
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
          <div className="gap-10">
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search any doctor..."
              />
            </label>
            <button className=" ml-4 btn rounded-full bg-[#176AE5] text-white">
              Search Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 mt-8 ">
          <img className="w-[450px]" src={bannerImage} alt="" srcset="" />
          <img  className="w-[450px]" src={bannerImage} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

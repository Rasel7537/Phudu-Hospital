import React from "react";
import successDoctorImage from "../../assets/success-doctor.png"
import successPatientImage from "../../assets/success-patients.png"
import successReviewImage from "../../assets/success-review.png"
import successStaffImage from "../../assets/success-staffs.png"
import CountUp from 'react-countup';
const Count = () => {
  return (
    <div className="mb-20 mt-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3 mt-10">
          {" "}
          We Provide Best Medical Services{" "}
        </h1>
        <p className="mb-10">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience.{" "}
        </p>
      </div>
      <div className="flex  justify-center items-center gap-2.5">
        <div className=" p-5 rounded-2xl shadow-2xl w-[200px] h-[200px] ">
          <img className="w-10" src={successDoctorImage} alt="" />
          <p className="text-4xl font-bold mt-3"><CountUp end={199} duration={20}/>+</p>
          <p className="mt-4">Total Doctors</p>
        </div>
        <div className=" p-5  rounded-2xl shadow-2xl w-[200px] h-[200px] ">
          <img className="w-10" src={successReviewImage} alt="" />
          <p  className="text-4xl font-bold mt-3"><CountUp end={467} duration={20}/>+</p>
          <p className="mt-4">Total Reviews</p>
        </div>
        <div className="  p-5  rounded-2xl shadow-2xl w-[200px] h-[200px] " >
          <img className="w-10" src={successPatientImage} alt="" />
          <p  className="text-4xl font-bold mt-3"><CountUp end={1900} duration={20}/>+</p>
          <p className="mt-4">Patients</p>
        </div>
        <div className="  p-5  rounded-2xl shadow-2xl w-[200px] h-[200px] " >
          <img className="w-10" src={successStaffImage} alt="" />
          <p  className="text-4xl font-bold mt-3"><CountUp end={300} duration={20}/>+</p>
          <p className="mt-4">Total Stuffs</p>
        </div>

      </div>
    </div>
  );
};

export default Count;

import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorBooking = () => {
//   const { id } = useParams();
//   const data = useLoaderData();
// console.log(data);
const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === doctorId);
  // console.log(singleDoctor);
  // console.log(typeof id,data);
  const {name,education,Fee}=singleDoctor;
  return (
    <div>
      <div className="text-center m-7 ">
          <h1 className="text-3xl font-bold">My Today Appointments</h1>
          <p className="mt-2">Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
      </div>

      <div >
      <div className="w-[1150px]  shadow-2xl rounded-2xl h-48 p-7 mb-10" >
         <p className="font-bold">{name}</p>
         <div className="flex justify-between items-center mt-4">
          <p className="text-[#524d4d] font-bold">{education}</p>
          <p className="text-[#524d4d] font-bold">{Fee}</p>
         </div>
         <button class="btn btn-sm w-full text-red-600 border-red-700 font-semibold rounded-full text-[16px] mt-7 ">Cancel Appointment</button>
      </div>
      
      </div>
    </div>
  );
};

export default DoctorBooking;

import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { BsExclamationOctagon } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';

const DoctorDetails = () => {
  const  tostifi = ()=>{
    toast("appointment scheduled for");
  }
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === doctorId);

  const {
    image,
    name,
    education,
    Working,
    registration_number,
    Availability,
    Fee,
  } = singleDoctor;

 

  return (
    <div>
      <div>
        <div className="w-[1175px] h-[256px] shadow-2xl rounded-2xl text-center my-7 pt-5">
          <h1 className="text-3xl font-bold pt-9">Doctor's Profile Details</h1>
          <p className="pt-4">
            Dr. Ayesha Rahman Specialization: Cardiology Qualifications: MBBS,
            MD (Cardiology) Experience: 12 years of practice in leading
            hospitals
            <br />
            Contact Details: Phone: +880 1234 567890 | Email:
            dr.ayesha.rahman@example.com
          </p>
        </div>
      </div>

      <div className="card card-side bg-base-100 shadow-sm">
        <figure>
          <img className="w-60 h-48" src={image} alt="doctor" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[#0b0a0a] font-bold text-2xl">
            {name}
          </h2>
          <p className="text-[#948a8a] font-semibold">{education}</p>
          <p className="font-semibold">
            Working at <br />
            {Working}
          </p>
          <div className="divider"></div>
          <p className="text-[#948a8a] font-semibold">
            Reg No: {registration_number}
          </p>
          <div className="divider"></div>
          <div className="font-semibold">Availability : {Availability}</div>
          <p className="font-semibold text-blue-500">Consultation Fee: {Fee}</p>
        </div>
      </div>

      <div>
        <div className="w-[1175px] h-[256px] shadow-2xl rounded-2xl text-center my-7 pt-5">
          <h1 className="text-3xl font-bold pt-9">Book an Appointment</h1>
          <div className="divider"></div>
          <div className="flex justify-between mx-7">
            <p className="font-bold text-2xl">Availability</p>
            <button className="btn rounded-full text-[#09982F] bg-green-100">
              Doctor Available Today
            </button>
          </div>
          <div className="divider"></div>
          <div className="flex gap-2 items-center text-[#FFA000] bg-orange-100 w-[1050px] h-7 mb-2 ml-12 rounded-full pl-7 ">
            <BsExclamationOctagon />
            <p>
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding and
              cooperation.
            </p>
          </div>

          <Link to={`/doctorBooking/${id}`}>
            <button onClick={tostifi} className="btn w-[1100px] h-10 rounded-full bg-[#176AE5] text-white font-bold">
              Book Appointment Now
              <ToastContainer />
            </button>
           
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

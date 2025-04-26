import React from "react";
import { useLoaderData, useParams } from "react-router";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const singleDoctor = data.find((doctor) => doctor.id === doctorId);
  // console.log(singleDoctor);
  // console.log(typeof id, data);
  const { image, name, education, speciality,Working,registration_number,Availability } = singleDoctor;
  return (
    <div>
      <div>
        <div className="w-[1280px] h-[256px] shadow-2xl rounded-2xl text-center my-7 pt-5">
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
          <h2 className="card-title text-[#0b0a0a] font-bold text-2xl">{name}</h2>
          <p className="text-[#948a8a] font-semibold">{education}</p>
          <p className=" font-semibold">Working at <br />
            {Working}
          </p>
          <div className="divider"></div>
          <p className="text-[#948a8a] font-semibold">Reg No: {registration_number}</p>
          <div className="divider"></div>
          <div>Availability{Availability}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;

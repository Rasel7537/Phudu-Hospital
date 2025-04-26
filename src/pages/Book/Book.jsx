import React from "react";

const Book = ({ singleBook }) => {
  const {
    image,
    name,
    education,
    experience,
    registration_number,
    Available,
  } = singleBook;

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="px-10 pt-10">
          <img src={image} alt="Doctor" className="rounded-xl" />
        </figure>
        <div className="card-body ">
          <div className="flex items-center gap-4 ">
            <div className=" rounded-full border px-3 font-bold text-[#09982F] bg-green-100">
              {Available}
            </div>
            <div className=" rounded-full border px-3 font-bold text-[#176AE5] bg-blue-100 ">
              {experience}
            </div>
          </div>
          <h2 className="card-title font-bold text-2xl">{name}</h2>
          <p className="text-[#524d4d] text-[18px] font-semibold">
            {education}
          </p>
          <div className="card-actions">
            <div className="gap-5 border-t-2 border-dashed border-black w-full">
              <p className="font-semibold text-2xl text-[#524d4d]">
                Reg No: {registration_number}
              </p>
            </div>

            <button className="btn btn-wide text-[#176AE5] font-semibold rounded-full border-blue-500 text-[20px] ml-8 mt-3">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;

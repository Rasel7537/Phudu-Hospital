import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBook, setAllBooks] = useState([]);
  const [displayBook, setDisplayBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    if (showAll) {
      setDisplayBooks(data);
    } else {
      setDisplayBooks(data.slice(0, 6));
    }
  }, [data, showAll]);
  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-6">Our Best Doctors </h1>
      <p className="text-center mb-8">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <Suspense fallback={<span>Loading.........</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {displayBook.map((singleBook) => (
            <Book key={singleBook.id} singleBook={singleBook}></Book>
          ))}
        </div>
      </Suspense>
      <div className="m-5 p-2  flex justify-center items-center">
        <p
          onClick={() => setShowAll((prv) => !prv)}
          className="btn rounded-full bg-[#176AE5] text-white font-semibold"
        >
          View All Doctors
        </p>
      </div>
    </div>
  );
};

export default Books;

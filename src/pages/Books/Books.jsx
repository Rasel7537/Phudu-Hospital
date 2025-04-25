import React, { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBook, setAllBooks] = useState([]);

  return (
    <div >
      <h1 className="text-3xl font-bold text-center">Our Best Doctors </h1>
      <p className="text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a <br />{" "}
        routine checkup or urgent consultation, book appointments in minutes and
        receive quality care you can trust.
      </p>
      <Suspense fallback={<span>Loading.........</span>}>
        {data.map((singleBook) => (
          <Book key={singleBook.id} singleBook={singleBook}></Book>
        ))}
      </Suspense>
    </div>
  );
};

export default Books;

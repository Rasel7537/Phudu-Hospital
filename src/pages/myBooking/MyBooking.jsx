import React from 'react';
import { Link } from 'react-router';

const MyBooking = () => {
  return (
    <div className='text-center  m-32 '>
       <h1 className='text-3xl font-bold'> You have not booked any appointment yet </h1>
       <p className='mt-7'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
       <Link to={'/'}><button className='btn mt-2 bg-blue-500 text-white'>Book an Appoinment</button></Link>
       
    </div>
  );
};

export default MyBooking;
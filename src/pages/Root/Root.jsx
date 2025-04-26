import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Count from '../../components/Count/Count';

const Root = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Count></Count>
      <Footer></Footer>
    </div>
  );
};

export default Root;
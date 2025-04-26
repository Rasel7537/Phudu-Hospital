import React from 'react';
import Banner from '../../components/Banner/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';
import Count from '../../components/Count/Count';


const Home = () => {
 const data = useLoaderData();
 console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Books data={data}></Books>
      <Count></Count>
    </div>
  );
};

export default Home;
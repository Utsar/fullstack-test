import React from 'react';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero home />
    </>
  );
};

export default Home;

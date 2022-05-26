import React from "react";
import Hero from "../components/hero/Hero";
import Navbar from "../client/src/components/navbar/Navbarvbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero home />
    </>
  );
};

export default Home;

import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Hero from "../components/hero/Hero";
import HeroRight from "../components/heroRight/HeroRight";
import Navbar from "../client/src/components/navbar/Navbarvbar/Navbar";

const Locations = () => {
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await axios.get("http://localhost:3001/api/locations");
      console.log(response.data);
    };
    fetchLocations();
  });
  return (
    <>
      <Navbar />

      <Hero locations />
    </>
  );
};

export default Locations;

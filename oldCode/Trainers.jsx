import axios from "axios";
import React from "react";
import { useEffect } from "react";
import Hero from "../components/hero/Hero";
import HeroRight from "../components/heroRight/HeroRight";
import Navbar from "../client/src/components/navbar/Navbarvbar/Navbar";

const Trainers = () => {
  useEffect(() => {
    const fetchTrainer = async () => {
      const response = await axios.get("http://localhost:3001/api/trainers");
      console.log(response.data);
    };
    fetchTrainer();
  });

  return (
    <>
      <Navbar />

      <Hero trainers />
    </>
  );
};

export default Trainers;

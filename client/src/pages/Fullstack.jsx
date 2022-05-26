import React from "react";
import CourseInfo from "../components/courseInfo/CourseInfo";
import TrainerInfo from "../components/trainerInfo/TrainerInfo";

const Fullstack = () => {
  return (
    <>
      <CourseInfo fullstack />
      <TrainerInfo fullstackTrainer />
    </>
  );
};

export default Fullstack;

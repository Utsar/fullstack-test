import React from "react";

import CourseInfo from "../components/courseInfo/CourseInfo";
import TrainerInfo from "../components/trainerInfo/TrainerInfo";

const Backend = () => {
  return (
    <>
      <CourseInfo backend />
      <TrainerInfo backendTrainer />
    </>
  );
};

export default Backend;

import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CoursesList from "../../components/courses/CoursesList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <CoursesList />
    </div>
  );
};

export default Home;

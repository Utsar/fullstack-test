import React from "react";
import Navbar from "../../components/navbar/Navbar";
import CoursesList from "../../components/courses/CoursesList";

const Home = () => {
  return (
    <div style={{ height: "100vh", width: "100%", overflow: "hidden" }}>
      <Navbar />
      <CoursesList />
    </div>
  );
};

export default Home;

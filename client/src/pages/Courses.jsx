import "./course.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../components/courseDetails/CourseDetails";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [location, setLocation] = useState([]);

  // Courses
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/courses/courseByTopic?topic=${params.courseTopic}`
      );
      setCourse(response.data);
    };
    fetchCourses();
  }, []);

  // Trainers
  useEffect(() => {
    const fetchTrainers = async () => {
      const response = await axios.get(
        `http://localhost:3001/api/trainers/getComp?competency=${params.courseTopic}`
      );

      setTrainer(response.data);
    };
    fetchTrainers();
  }, []);

  // Locations
  useEffect(() => {
    const fetchLocations = async () => {
      const response = await axios.get(`http://localhost:3001/api/locations`);

      setLocation(response.data);
    };
    fetchLocations();
  }, []);

  let params = useParams();
  return (
    <>
      <div className="container">
        {course.map((c) => (
          <CourseDetails
            key={c._id}
            c={c}
            trainer={trainer}
            location={location}
          />
        ))}
      </div>
      <h1>{params.courseTopic}</h1>;
    </>
  );
};

export default Courses;

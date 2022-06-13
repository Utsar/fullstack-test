import "./course.css";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "../components/courseDetails/CourseDetails";
import Paginations from "../components/pagination/Paginations";

const Courses = () => {
  const [course, setCourse] = useState([]);
  const [trainer, setTrainer] = useState([]);
  const [location, setLocation] = useState([]);
  const [student, setStudent] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(3);

  console.log(course);
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
  // students
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get(`http://localhost:3001/api/students`);

      setStudent(response.data);
      console.log("This is list of students", response.data);
    };
    fetchStudents();
  }, []);
  let params = useParams();
  console.log(params);

  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = course.slice(indexOfFirstCourse, indexOfLastCourse);
  console.log("This is current courses", currentCourses);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="coursesContainer">
      <div className="pagination">
        <Paginations
          coursesPerPage={coursesPerPage}
          totalCourses={course.length}
          paginate={paginate}
        />
      </div>
      <div className="courseContainer">
        {currentCourses.map((c) => (
          <CourseDetails
            key={c._id}
            c={c}
            trainer={trainer}
            location={location}
            student={student}
            courses={currentCourses}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;

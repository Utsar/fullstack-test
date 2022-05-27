import "./coursesList.css";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import axios from "axios";
import { images } from "../../assets/menuItems.js";

const CoursesList = () => {
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const result = await axios.get(
          `http://localhost:3001/api/trainers/getComp?competency=Backend`
        );
      } catch (error) {
        console.log(error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="heading">
          <h1 className="headingText">Browse our inspiring courses</h1>
        </div>
        <div className="infoRow">
          {images.map((i) => (
            <div className="infoRow" ket={i.id}>
              <div className="infoWrap">
                <img className="image" src={i.src} alt={i.alt} />
                <h2 className="courseDescription">{i.topic}</h2>
                <Link className="link" to="/courses/frontend">
                  <p className="viewCourses">{i.desc}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesList;

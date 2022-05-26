import "./coursesList.css";
import { Link } from "react-router-dom";

// import frontend2 from '../../assets/images/frontend2.jpg';
import frontend from "../../assets/images/frontend.jpg";
import backend from "../../assets/images/backend.jpg";
import fullstack from "../../assets/images/fullstack.jpg";
import cloud from "../../assets/images/cloud.jpg";
import security from "../../assets/images/security.jpg";
import { useEffect } from "react";
import axios from "axios";

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
          <div className="infoRow">
            <div className="infoWrap">
              <img className="image" src={frontend} alt="frontend" />
              <h2 className="courseDescription">Frontend</h2>
              <Link className="link" to="/courses/frontend">
                <p className="viewCourses">Be the viusal Wizard!</p>
              </Link>
            </div>
          </div>
          <div className="infoRow">
            <div className="infoWrap">
              <img className="image" src={backend} alt="backend" />
              <h2 className="courseDescription">Backend</h2>
              <Link className="link" to="/courses/backend">
                <p className="viewCourses">Welcome to the dark side!</p>
              </Link>
            </div>
          </div>
          <div className="infoRow">
            <div className="infoWrap">
              <img className="image" src={fullstack} alt="fullstack" />
              <h2 className="courseDescription">Fullstack</h2>
              <Link className="link" to="/courses/fullstack">
                <p className="viewCourses">All or nothing!</p>
              </Link>
            </div>
          </div>
          <div className="infoRow">
            <div className="infoWrap">
              <img className="image" src={cloud} alt="cloud" />
              <h2 className="courseDescription">Cloud</h2>
              <Link className="link" to="/courses/cloud">
                <p className="viewCourses">Everything is better in the cloud</p>
              </Link>
            </div>
          </div>
          <div className="infoRow">
            <div className="infoWrap">
              <img className="image" src={security} alt="security" />
              <h2 className="courseDescription">Security</h2>
              <Link className="link" to="/courses/security">
                <p className="viewCourses">This is very important</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesList;

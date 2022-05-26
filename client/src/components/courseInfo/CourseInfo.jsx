import "./courseInfo.css";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import frontend2 from "../../assets/images/frontend2.jpg";

const CourseInfo = ({ frontend, backend, fullstack, cloud, security }) => {
  const [courseFE, setCourseFE] = useState([]);
  const [courseBE, setCourseBE] = useState([]);
  const [courseFS, setCourseFS] = useState([]);
  const [courseCL, setCourseCL] = useState([]);
  const [courseSEC, setCourseSEC] = useState([]);

  // Frontendcourseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/courses?topic=Frontend"
      );
      setCourseFE(response.data);
    };
    fetchData();
  }, []);
  // Backendcourseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/courses?topic=Backend"
      );
      setCourseBE(response.data);
    };
    fetchData();
  }, []);
  // Fullstackcourseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/courses?topic=Fullstack"
      );
      setCourseFS(response.data);
    };
    fetchData();
  }, []);
  // Cloudcourseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/courses?topic=Cloud"
      );
      setCourseCL(response.data);
    };
    fetchData();
  }, []);
  // Securitydcourseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3001/api/courses?topic=Security"
      );
      setCourseSEC(response.data);
    };
    fetchData();
  }, []);

  const createBooking = async (e, c) => {
    e.preventDefault();
    const payload = {
      course: c._id,
      location: "628a3d9c570ec3058627ced5",
      trainer: "628a3f6a570ec3058627cf39",
      student: ["kris", "mike"],
      comments: [],
    };
    const response = await axios.post(
      "http://localhost:3001/api/bookings",
      payload
    );
  };

  return (
    <>
      <div className="container">
        {frontend && (
          <div className="cardContainer">
            {courseFE.map((c) => (
              <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={frontend2} />
                  <Card.Title>{c.topic}</Card.Title>
                  <Card.Text>Course name: {c.name}</Card.Text>
                  <Card.Text>Difficulty level: {c.level}</Card.Text>
                  <Card.Text>Course duration: {c.duration} days</Card.Text>
                  <Button
                    variant="primary"
                    onClick={(e) => createBooking(e, c)}
                  >
                    Go somewhere
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {backend && (
          <div className="cardContainer">
            {courseBE.map((c) => (
              <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={frontend2} />
                  <Card.Title>{c.topic}</Card.Title>
                  <Card.Text>{c.name}</Card.Text>
                  <Card.Text>Difficulty level: {c.level}</Card.Text>
                  <Card.Text>Course duration: {c.duration} days</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {fullstack && (
          <div className="cardContainer">
            {courseFS.map((c) => (
              <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={frontend2} />
                  <Card.Title>{c.topic}</Card.Title>
                  <Card.Text>{c.name}</Card.Text>
                  <Card.Text>Difficulty level: {c.level}</Card.Text>
                  <Card.Text>Course duration: {c.duration} days</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {cloud && (
          <div className="cardContainer">
            {courseCL.map((c) => (
              <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={frontend2} />
                  <Card.Title>{c.topic}</Card.Title>
                  <Card.Text>{c.name}</Card.Text>
                  <Card.Text>Difficulty level: {c.level}</Card.Text>
                  <Card.Text>Course duration: {c.duration} days</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        {security && (
          <div className="cardContainer">
            {courseSEC.map((c) => (
              <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
                <Card.Body>
                  <Card.Img variant="top" src={frontend2} />
                  <Card.Title>{c.topic}</Card.Title>
                  <Card.Text>{c.name}</Card.Text>
                  <Card.Text>Difficulty level: {c.level}</Card.Text>
                  <Card.Text>Course duration: {c.duration} days</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CourseInfo;

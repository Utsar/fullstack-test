import './heroRight.css';
import { Card, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const HeroRight = ({ trainers, locations, courses, home }) => {
  const [course, setCourse] = useState([]);
  const [location, setLocation] = useState([]);
  const [trainer, setTrainer] = useState([]);

  // courseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/api/locations');
      setLocation(response.data);
    };
    fetchData();
  }, []);

  // trainers
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/api/trainers');
      setTrainer(response.data);
    };
    fetchData();
  }, []);

  // courseses
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://localhost:3001/api/courses');
      setCourse(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="wrapper">
        {home && <div></div>}
        {trainers && (
          <div className="trainersContainer">
            <div className="cardComponent">
              {trainer.map(t => (
                <Card key={t._id} style={{ width: '18rem', margin: '10px 10px' }}>
                  <Card.Body>
                    <Card.Title>{t.compentencies}</Card.Title>
                    <Card.Text>{t.firstName}</Card.Text>
                    <Card.Text>{t.lastName}</Card.Text>
                    <Card.Text>City: {t.city}</Card.Text>
                    <Card.Text>Country: {t.country}</Card.Text>
                    <Card.Text>Wheelchair accessible: {t.wheelchairAccessible}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        )}
        {locations && (
          <div className="cardComponent">
            {location.map(l => (
              <Card key={l._id} style={{ width: '18rem', margin: '10px 10px' }}>
                <Card.Body>
                  <Card.Title>{l.name}</Card.Title>
                  <Card.Text>City: {l.city}</Card.Text>
                  <Card.Text>Country: {l.country}</Card.Text>
                  <Card.Text>Wheelchair accessible: {l.wheelchairAccessible}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        )}
        <>
          {courses && (
            <div className="cardComponent">
              {course.map(c => (
                <Card key={c._id} style={{ width: '18rem', margin: '10px 10px' }}>
                  <Card.Body>
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
        </>
      </div>
    </>
  );
};

export default HeroRight;

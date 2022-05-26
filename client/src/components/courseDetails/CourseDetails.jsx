import React from "react";

import { useState } from "react";
import { Button, Card, Dropdown } from "react-bootstrap";

const CourseDetails = ({ c, trainer, location }) => {
  const [selectedTrainer, setSelectedTrainer] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});

  const selectTrainer = (e, trainer) => {
    e.preventDefault();
    setSelectedTrainer(trainer);
  };
  const selectLocation = (e, location) => {
    e.preventDefault();
    setSelectedLocation(location);
  };

  return (
    <>
      <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
        <Card.Body>
          <Card.Img variant="top" />
          <Card.Title>{c.topic}</Card.Title>
          <Card.Text>{c.name}</Card.Text>
          <Card.Text>Difficulty level: {c.level}</Card.Text>
          <Card.Text>Course duration: {c.duration} days</Card.Text>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {selectedTrainer.firstName
                ? selectedTrainer.firstName
                : "Select Trainer"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {trainer.map((t) => (
                <Dropdown.Item key={t._id} onClick={(e) => selectTrainer(e, t)}>
                  {t.firstName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          {selectedTrainer.firstName && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                select Location
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {location.map((l) => (
                  <Dropdown.Item
                    key={l._id}
                    onClick={(e) => selectLocation(e, t)}
                  >
                    {l.firstName}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}

          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseDetails;

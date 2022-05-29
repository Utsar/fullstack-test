import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Dropdown, Form } from "react-bootstrap";
import { images } from "../../assets/menuItems.js";

const CourseDetails = ({ c, trainer, location }) => {
  const [selectedTrainer, setSelectedTrainer] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [comment, setComment] = useState("");
  const [mandatory, setMandatory] = useState(false);

  const selectTrainer = (e, trainer) => {
    e.preventDefault();
    setSelectedTrainer(trainer);
  };
  const selectLocation = (e, location) => {
    e.preventDefault();
    setSelectedLocation(location);
  };

  const selectCity = (e, city) => {
    e.preventDefault();
    setSelectedCity(city);
    console.log(city);
    console.log(selectedCity);
  };

  const selectComment = (e) => {
    let comment = e.target.value;
    setComment(comment);
    console.log(comment);
  };

  const selectMandatory = (e) => {
    let checked = e.target.checked;
    setMandatory(checked);
  };
  console.log(mandatory);

  const createBooking = async (
    trainer,
    location,
    c,
    city,
    comment,
    mandatory
  ) => {
    let payload = {
      course: c._id,
      city: city,
      location: location._id,
      trainer: trainer._id,
      student: [],
      comments: comment,
      mandatory: mandatory,
    };

    await axios.post("http://localhost:3001/api/bookings", payload);
  };

  useEffect(() => {
    // let uniqueCities = [...new Set(location.map((l) => l.city))];

    setCityList([...new Set(location.map((l) => l.city))]);
  }, [location]);
  return (
    <>
      <Card key={c._id} style={{ width: "18rem", margin: "10px 10px" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            // src={`../../assets/images/${c.topic.toLowerCase()}.jpg`}
            src={`/${c.topic.toLowerCase()}.jpg`}
          />
          <Card.Title>{c.topic}</Card.Title>
          <Card.Text>{c.name}</Card.Text>
          <Card.Text>Difficulty level: {c.level}</Card.Text>
          {c.duration >= 2 ? (
            <Card.Text>Duration: {c.duration} days</Card.Text>
          ) : (
            <Card.Text>Duration: {c.duration} day</Card.Text>
          )}

          {/* <Card.Text>Course duration: {c.duration} days</Card.Text> */}
          {cityList.length != 0 && (
            // <p> citylist goes here</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedCity ? selectedCity : "Select City"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {cityList.map((city) => (
                  <Dropdown.Item onClick={(e) => selectCity(e, city)}>
                    {city}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          {selectedCity !== "" && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedLocation.name
                  ? selectedLocation.name
                  : "Select Location"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {location
                  .filter((e) => e.city === selectedCity)
                  .map((l) => (
                    <Dropdown.Item
                      key={l._id}
                      onClick={(e) => selectLocation(e, l)}
                    >
                      {l.name}
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          {selectedLocation.city && (
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedTrainer.firstName
                  ? selectedTrainer.firstName + " " + selectedTrainer.lastName
                  : "Select Trainer"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {trainer.map((t) => {
                  if (selectedLocation.wheelchairAccessible === true)
                    return (
                      <Dropdown.Item
                        key={t._id}
                        onClick={(e) => selectTrainer(e, t)}
                      >
                        {t.firstName + " " + t.lastName}
                      </Dropdown.Item>
                    );
                  else
                    return t.needWheelchair ? null : (
                      <Dropdown.Item
                        key={t._id}
                        onClick={(e) => selectTrainer(e, t)}
                      >
                        {t.firstName + " " + t.lastName}
                      </Dropdown.Item>
                    );
                })}
              </Dropdown.Menu>
              <Dropdown.Menu>
                {trainer.map((t) => {
                  if (selectedLocation.wheelchairAccessible === true)
                    return (
                      <Dropdown.Item
                        key={t._id}
                        onClick={(e) => selectTrainer(e, t)}
                      >
                        {t.firstName + " " + t.lastName}
                      </Dropdown.Item>
                    );
                  else
                    return t.needWheelchair ? null : (
                      <Dropdown.Item
                        key={t._id}
                        onClick={(e) => selectTrainer(e, t)}
                      >
                        {t.firstName + " " + t.lastName}
                      </Dropdown.Item>
                    );
                })}
              </Dropdown.Menu>
            </Dropdown>
          )}
          <Form>
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Mandatory"
              onChange={(e) => selectMandatory(e)}
            />
          </Form>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Add comment</Form.Label>
              <Form.Control type="text" onChange={(e) => selectComment(e)} />
            </Form.Group>
          </Form>
          <Button
            variant="primary"
            onClick={(e) =>
              createBooking(
                selectedLocation,
                selectedTrainer,
                c,
                selectedCity,
                comment,
                mandatory
              )
            }
          >
            Book now
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CourseDetails;

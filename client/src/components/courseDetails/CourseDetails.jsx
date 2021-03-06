import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Card, Dropdown, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CourseDetails = ({ c, trainer, location, student }) => {
  const [selectedTrainer, setSelectedTrainer] = useState({});
  const [selectedLocation, setSelectedLocation] = useState({});
  const [selectedCity, setSelectedCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [comment, setComment] = useState("");
  const [mandatory, setMandatory] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedStudent, setSelectedStudent] = useState([]);

  const newStartDate = startDate.toISOString().slice(0, 10);
  // creates new date function to add days to the start date
  Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };
  const selectStudent = (e, student) => {
    e.preventDefault();
    let students = [...selectedStudent, student];
    setSelectedStudent(students);
    console.log("This is the selected students", selectedStudent);
  };

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

  const createBooking = async (
    c,
    city,
    location,
    selectComment,
    mandatory,
    newStartDate,
    student
  ) => {
    let payload = {
      course: c.topic,
      city: selectedCity,
      location: selectedLocation.name,
      trainer: selectedTrainer.firstName + " " + selectedTrainer.lastName,
      startDate: newStartDate,
      endDate: new Date(newStartDate).addDays(c.duration),
      students: [...selectedStudent],
      comments: comment,
      mandatory: mandatory,
    };

    await axios.post("http://localhost:3001/api/bookings", payload);
  };

  useEffect(() => {
    setCityList([...new Set(location.map((l) => l.city))]);
  }, [location]);

  // add end date
  useEffect(() => {
    setEndDate(startDate.addDays(c.duration));
  }, [startDate, c.duration]);

  return (
    <>
      <Card key={c._id} style={{ width: "20rem", margin: "10px 10px" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            // src={`../../assets/images/${c.topic.toLowerCase()}.jpg`}
            src={`/${c.topic.toLowerCase()}.jpg`}
          />
          <Card.Title>{c.topic}</Card.Title>
          <Card.Text> Course name: {c.name}</Card.Text>
          <Card.Text>Difficulty level: {c.level}</Card.Text>
          {c.duration >= 2 ? (
            <Card.Text>Duration: {c.duration} days</Card.Text>
          ) : (
            <Card.Text>Duration: {c.duration} day</Card.Text>
          )}

          <Dropdown style={{ marginBottom: "10px" }}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ minWidth: "175px" }}
            >
              Add Students
            </Dropdown.Toggle>
            <Dropdown.Menu
              style={{
                maxHeight: "200px",
                overflowY: "scroll",
              }}
            >
              {student.map((student) => (
                <Dropdown.Item onClick={(e) => selectStudent(e, student)}>
                  {student.firstName + " " + student.lastName}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>

          {cityList.length !== 0 && (
            <Dropdown style={{ marginBottom: "10px" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ minWidth: "175px" }}
              >
                {selectedCity ? selectedCity : "Select City"}
              </Dropdown.Toggle>
              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              >
                {cityList.map((city) => (
                  <Dropdown.Item onClick={(e) => selectCity(e, city)}>
                    {city}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          )}
          {selectedCity !== "" && (
            <Dropdown style={{ marginBottom: "10px" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ minWidth: "175px" }}
              >
                {selectedLocation.name
                  ? selectedLocation.name
                  : "Select Location"}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              >
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
            <Dropdown style={{ marginBottom: "10px" }}>
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                style={{ minWidth: "175px" }}
              >
                {selectedTrainer.firstName
                  ? selectedTrainer.firstName + " " + selectedTrainer.lastName
                  : "Select Trainer"}
              </Dropdown.Toggle>

              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              >
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
              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              >
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
              <Dropdown.Menu
                style={{
                  maxHeight: "200px",
                  overflowY: "scroll",
                }}
              >
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
              label="Mandatory"
              id="custom-switch"
              onChange={(e) => selectMandatory(e)}
            />
          </Form>
          <Form>
            <Form.Group
              className="mb-1"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="text"
                placeholder="add comment"
                onChange={(e) => selectComment(e)}
              />
            </Form.Group>
          </Form>

          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </Card.Body>
        <Button
          style={{ margin: "10px 10px" }}
          variant="primary"
          onClick={(e) =>
            createBooking(
              c,
              selectedLocation,
              selectedCity,
              selectedTrainer,
              mandatory,
              newStartDate,
              endDate,
              comment,
              selectedStudent
            )
          }
        >
          Book now
        </Button>
      </Card>
    </>
  );
};

export default CourseDetails;

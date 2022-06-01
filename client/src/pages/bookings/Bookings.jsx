import axios from "axios";

import React from "react";
import { useEffect, useState } from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Table,
} from "react-bootstrap";

const Bookings = () => {
  Date.prototype.toShortFormat = function () {
    let monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let day = this.getDate();
    let monthIndex = this.getMonth();
    let monthName = monthNames[monthIndex];
    let year = this.getFullYear();
    return `${day}-${monthName}-${year}`;
  };

  const [bookings, setBookings] = useState([]);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get(`http://localhost:3001/api/bookings`);
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  //   get students
  useEffect(() => {
    const fetchStudents = async () => {
      const response = await axios.get(`http://localhost:3001/api/students`);
      setStudents(response.data);
      console.log(response.data);
    };
    fetchStudents();
  }, []);

  return (
    <>
      <Container className="auctionsContainer">
        <Row className="auctions">
          {bookings.map((booking, index) => (
            <Table
              responsive
              striped
              bordered
              hover
              variant="dark"
              style={{ marginBottom: "10px" }}
              key={index}
            >
              <thead>
                <tr>
                  <th>#{index}</th>
                  <th>Course Name</th>
                  <th> City</th>
                  <th> Location</th>
                  <th>Trainer</th>
                  <th> Start Date</th>
                  <th> End Date</th>
                  <th> Comments</th>
                  <th>Certification requirement</th>
                  <th style={{ zIndex: "1" }}>
                    <Dropdown style={{ marginBottom: "10px" }}>
                      <Dropdown.Toggle
                        variant="secondary"
                        id="dropdown-basic"
                        style={{ minWidth: "175px" }}
                      >
                        students
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{
                          maxHeight: "200px",
                          overflowY: "scroll",
                        }}
                      >
                        {students.map((student) => (
                          <Dropdown.Item>{student.firstName}</Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{""}</td>
                  <td>{booking.course}</td>
                  <td>{booking.city}</td>
                  <td>{booking.location}</td>
                  <td>{booking.trainer}</td>
                  <td>{new Date(booking?.startDate).toShortFormat()}</td>
                  <td>{new Date(booking?.endDate).toShortFormat()}</td>
                  <td>{booking.comments}</td>
                  {booking.mandatory === true ? (
                    <td>Mandatory</td>
                  ) : (
                    <td>Optional</td>
                  )}
                  <td></td>
                </tr>
              </tbody>
            </Table>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Bookings;

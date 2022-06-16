import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Container, Row, Table } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";

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
  const [upcomingBooking, setUpcomingBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await axios.get(`http://localhost:3001/api/bookings`);
      setBookings(response.data);
    };
    fetchBookings();
  }, []);

  // filter upcoming bookings only
  useEffect(() => {
    const futureBookings = bookings.filter((booking) => {
      return new Date(booking.startDate) > new Date();
    });
    setUpcomingBookings(futureBookings);
    console.log(futureBookings);
  }, [bookings]);

  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "1rem" }}>
        <Row className="auctions">
          {upcomingBooking
            .map((booking, index) => (
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
                    <th>City</th>
                    <th>Location</th>
                    <th>Trainer</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Comments</th>
                    <th>Certification requirement</th>
                    <th>Students</th>
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
                    {booking.students.length > 0 ? (
                      booking.students.map((student) => (
                        <td
                          style={{
                            display: "flex",
                            flexDirection: "column",
                          }}
                          key={student._id}
                        >
                          {student.firstName + " " + student.lastName}
                        </td>
                      ))
                    ) : (
                      <td>No enrolled students</td>
                    )}
                  </tr>
                </tbody>
              </Table>
            ))
            .sort((a, b) => {
              return new Date(a.startDate) - new Date(b.startDate);
            })}
        </Row>
      </Container>
    </>
  );
};

export default Bookings;

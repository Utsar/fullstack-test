import express from "express";
import {
  createBooking,
  createComments,
  getBooking,
  getBookings,
} from "../controllers/booking.js";

const bookingRouter = express.Router();

bookingRouter.get("/", getBookings);
bookingRouter.get("/find/:id", getBooking);
bookingRouter.post("/", createBooking);
bookingRouter.post("/createComment/:id", createComments);

export default bookingRouter;

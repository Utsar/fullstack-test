import Booking from "../models/BookingSchema.js";

// get all bookings
export const getBookings = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    res.send(bookings);
  } catch (error) {
    next(error);
  }
};
// get single booking
export const getBooking = async (req, res, next) => {
  try {
    const bookings = await Booking.find(req.params.id);
    res.send(bookings);
  } catch (error) {
    next(error);
  }
};
// create booking
export const createBooking = async (req, res, next) => {
  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (error) {
    next(error);
  }
};
// create comments

export const createComments = async (req, res, next) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, {
      $push: { comments: req.body.comment },
    });
    res.status(201).send(booking);
  } catch (error) {
    next(error);
  }
};

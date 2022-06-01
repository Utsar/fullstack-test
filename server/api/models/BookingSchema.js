import mongoose from "mongoose";

const { Schema, model } = mongoose;

const BookingSchema = new Schema(
  {
    course: {
      type: String,
    },
    location: {
      type: String,
    },
    city: {
      type: String,
    },
    trainer: {
      type: String,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    students: {
      type: Array,
    },
    comments: {
      type: String,
    },
    mandatory: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default model("Booking", BookingSchema);

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const BookingSchema = new Schema(
  {
    course: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    trainer: {
      type: String,
      required: true,
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
  },
  { timestamps: new Date('<dd-mm-YYYY>') },
);

export default model('Booking', BookingSchema);

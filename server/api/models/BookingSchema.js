import mongoose from "mongoose";

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
    city: {
      type: String,
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
    mandatory: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

/* {
  "course": "628a3b23570ec3058627ceb3",
  "location": "628a3d9c570ec3058627ced5",
  "trainer": "628a3f6a570ec3058627cf39",
  "student": ["kris", "mike"],
  "comments": []
  
}*/

export default model("Booking", BookingSchema);

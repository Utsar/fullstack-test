import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const CourseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
      trainer: { type: mongoose.Types.ObjectId, ref: 'Trainer' },
    },
    level: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

// deleting information which doesnt need to be visible
CourseSchema.methods.toJSON = function () {
  const course = this;
  const courseObject = course.toObject();
  delete courseObject.__v;
  return courseObject;
};

export default model('Course', CourseSchema);

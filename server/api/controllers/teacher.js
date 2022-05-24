import Course from '../models/CourseSchema';
import Trainer from '../models/TrainerSchema';
import mongoose from 'mongoose';

const toId = mongoose.Types.ObjectId;

export const getTeacher = async (req, res, send) => {
  const trainer = toId(req.params.trainer);
  const course = await Course.findById(req.params.course);
  course.trainer = trainer;
  res.send(course);
  //   const course = ourse.findByIdAndUpdate(req.params.course, {trainer: trainer})
};

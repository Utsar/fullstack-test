import Course from "../models/CourseSchema.js";

export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find(req.query);
    res.send(courses);
  } catch (error) {
    next(error);
  }
};

export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).send(course);
  } catch (error) {
    next(error);
  }
};

export const countByCourse = async (req, res, next) => {
  const topics = req.query.topics.split(",");
  try {
    const list = await Promise.all(
      topics.map((topic) => {
        return Course.countDocuments({ topic: topic });
      })
    );
    res.status(200).send(list);
  } catch (error) {
    next(error);
  }
};

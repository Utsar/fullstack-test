import Course from "../models/CourseSchema.js";

// get all courses
export const getCourses = async (req, res, next) => {
  try {
    const courses = await Course.find(req.query);
    res.send(courses);
  } catch (error) {
    next(error);
  }
};

// get single course
export const getCourse = async (req, res, next) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).send(course);
  } catch (error) {
    next(error);
  }
};

// get course by topic
export const courseByTopic = async (req, res, next) => {
  try {
    let newQuery =
      req.query.topic.charAt(0).toUpperCase() + req.query.topic.slice(1);
    const courses = await Course.find({ topic: newQuery });
    res.send(courses);
  } catch (error) {
    next(error);
  }
};

// export const countByCourse = async (req, res, next) => {
//   const topics = req.query.topics.split(",");
//   try {
//     const list = await Promise.all(
//       topics.map((topic) => {
//         return Course.countDocuments({ topic: topic });
//       })
//     );
//     res.status(200).send(list);
//   } catch (error) {
//     next(error);
//   }
// };

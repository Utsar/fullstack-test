import express from "express";
import { courseByTopic, getCourse, getCourses } from "../controllers/course.js";

const courseRouter = express.Router();
// get single
courseRouter.get("/find/:id", getCourse);
// get all
courseRouter.get("/", getCourses);

// courseRouter.get("/countbycourse", countByCourse);

// get course by topic
courseRouter.get("/courseByTopic", courseByTopic);
export default courseRouter;

import express from "express";
import { countByCourse, getCourse, getCourses } from "../controllers/course.js";

const courseRouter = express.Router();
// get single
courseRouter.get("/find/:id", getCourse);
// get all
courseRouter.get("/", getCourses);
courseRouter.get("/countbycourse", countByCourse);
export default courseRouter;

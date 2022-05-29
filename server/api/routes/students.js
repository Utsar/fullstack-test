import express from "express";
import {
  createStudent,
  getStudent,
  getStudents,
} from "../controllers/student.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.get("/find/:id", getStudent);
studentRouter.post("/", createStudent);

export default studentRouter;

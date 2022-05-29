import Student from "../models/StudentSchema.js";

// create sudent

export const createStudent = async (req, res, next) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).send(student);
  } catch (error) {
    next(error);
  }
};

// get all students

export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.send(students);
  } catch (error) {
    next(error);
  }
};

// get single student

export const getStudent = async (req, res, next) => {
  try {
    const student = await Student.find(req.params.id);
    res.send(student);
  } catch (error) {
    next(error);
  }
};

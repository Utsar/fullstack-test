import express from 'express';
import { getTeacher } from '../controllers/teacher';

const teacherRouter = express.Router();

teacherRouter.get('/courseByTrainer/:course/:trainer', getTeacher);

export default teacherRouter;

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRouter from './api/controllers/auth.js';
import trainerRouter from './api/routes/trainers.js';
import locationsRouter from './api/routes/locations.js';
import courseRouter from './api/routes/courses.js';
import teacherRouter from './api/routes/teachers.js';

const server = express();
const PORT = 3001;
const MONGO = process.env.MONGODB;

// ****************** MIDDLEWARES ******************
server.use(express.json());
server.use(cors());

// ****************** ROUTES ******************
server.use('/api/auth', authRouter);
server.use('/api/trainers', trainerRouter);
server.use('/api/locations', locationsRouter);
server.use('/api/courses', courseRouter);
server.use('/api/teachers', teacherRouter);

// ********** INITIALISING MONGOOSE CONNECTION **********
const connect = async () => {
  try {
    await mongoose.connect(MONGO);
    console.log('Connected to MongoDB');
  } catch (error) {
    throw error;
  }
};

server.listen(PORT || 3001, () => {
  connect();
  console.log(`Server is running on port: ${PORT}`);
});

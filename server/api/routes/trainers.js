import express from 'express';
import { getTrainers } from '../controllers/trainer.js';
import Trainer from '../models/TrainerSchema.js';

const trainerRouter = express.Router();

// get all
trainerRouter.get('/', getTrainers);

export default trainerRouter;

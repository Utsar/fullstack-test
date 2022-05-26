import express from "express";
import {
  availableTrainer,
  getByCompetencies,
  getBySkills,
  getComp,
  getDisabledTrainers,
  getTrainers,
} from "../controllers/trainer.js";
import Trainer from "../models/TrainerSchema.js";

const trainerRouter = express.Router();

// get all
trainerRouter.get("/", getTrainers);
trainerRouter.get("/getBySkills", getBySkills);

trainerRouter.get("/getByCompetencies", getByCompetencies);
trainerRouter.get("/getBywheelchair", getDisabledTrainers);

trainerRouter.get("/getAvailableTrainers", availableTrainer);

trainerRouter.get("/getComp", getComp);

export default trainerRouter;

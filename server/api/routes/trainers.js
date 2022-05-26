import express from "express";
import { getComp, getTrainers } from "../controllers/trainer.js";

const trainerRouter = express.Router();

// get all
trainerRouter.get("/", getTrainers);

// get trainer by competencies
trainerRouter.get("/getComp", getComp);

// test routes

// trainerRouter.get("/getBySkills", getBySkills);

// trainerRouter.get("/getByCompetencies", getByCompetencies);
// trainerRouter.get("/getBywheelchair", getDisabledTrainers);

// trainerRouter.get("/getAvailableTrainers", availableTrainer);

export default trainerRouter;

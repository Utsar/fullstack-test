import express from "express";
import { getLocations } from "../controllers/location.js";
import LocationSchema from "../models/LocationSchema.js";

const locationsRouter = express.Router();

// get all
locationsRouter.get("/", getLocations);

export default locationsRouter;

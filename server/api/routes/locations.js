import express from "express";
import {
  getAccessibleLocations,
  getLocations,
  locationsInCity,
} from "../controllers/location.js";
import LocationSchema from "../models/LocationSchema.js";

const locationsRouter = express.Router();

// get all
locationsRouter.get("/", getLocations);

// get accessible
locationsRouter.get("/accessible", getAccessibleLocations);

// get locations in a city

locationsRouter.get("/city", locationsInCity);

export default locationsRouter;

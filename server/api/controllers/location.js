import Location from "../models/LocationSchema.js";

export const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.send(locations);
  } catch (error) {
    next(error);
  }
};

export const getAccessibleLocations = async (req, res, next) => {
  try {
    const locations = await Location.find({
      wheelchairAccessible: true,
    });
    res.send(locations);
  } catch (error) {
    next(error);
  }
};

// get locations in city

export const locationsInCity = async (req, res, next) => {
  const { city } = req.body;
  try {
    const locations = await Location.find().where("city").in(city);
    res.send(locations);
  } catch (error) {
    next(error);
  }
};

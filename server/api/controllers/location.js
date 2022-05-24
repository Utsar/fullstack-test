import Location from '../models/LocationSchema.js';

export const getLocations = async (req, res, next) => {
  try {
    const locations = await Location.find();
    res.send(locations);
  } catch (error) {
    next(error);
  }
};

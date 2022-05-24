import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const LocationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
    wheelchairAccessible: {
      type: Boolean,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// deleting information which doesnt need to be visible
LocationSchema.methods.toJSON = function () {
  const location = this;
  const locationObject = location.toObject();
  delete locationObject.__v;
  return locationObject;
};

export default model('Location', LocationSchema);

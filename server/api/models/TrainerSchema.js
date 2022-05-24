import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const TrainerSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    level: {
      type: Boolean,
      required: true,
    },
    competencies: {
      type: [String],
    },
    needWheelchair: {
      type: Boolean,
      trainer: { type: mongoose.Types.ObjectId, ref: 'Trainer' },
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default model('Trainer', TrainerSchema);

import mongoose from "mongoose";

const RewardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  maxPerDay: {
    type: Number,
  },
});

export const Reward =
  mongoose.models.Reward || mongoose.model("Reward", RewardSchema, "rewards");

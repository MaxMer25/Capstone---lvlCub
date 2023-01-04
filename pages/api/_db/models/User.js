import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  gold: {
    type: Number,
  },
  experience: {
    type: Number,
  },
  level: {
    type: Number,
  },
  rewards: {
    type: Object,
  },
});

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema, "user");

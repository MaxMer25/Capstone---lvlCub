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
});

export const User =
  mongoose.models.User || mongoose.model("User", UserSchema, "user");

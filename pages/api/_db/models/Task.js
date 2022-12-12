import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  whichOne: {
    type: String,
  },
  details: {
    type: String,
  },
  gold: {
    type: String,
  },
  experience: {
    type: String,
  },
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", TaskSchema, "lvlCubTasks");

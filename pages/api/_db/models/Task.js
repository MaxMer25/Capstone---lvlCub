import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  forWhom: {
    type: String,
  },
  whoDid: {
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
  review: {
    type: String,
  },
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", TaskSchema, "lvlCubTasks");

import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  whichOne: {
    type: String,
    required: false,
  },
  details: {
    type: String,
    required: false,
  },
});

export const Task =
  mongoose.models.Task || mongoose.model("Task", TaskSchema, "lvlCubTasks");

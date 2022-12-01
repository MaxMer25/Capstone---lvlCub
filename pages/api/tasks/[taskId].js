import connectDB from "../_db/connect-db";
import {Task} from "../_db/models/Task";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const task = await Task.findById(req.query.taskId);
        if (task) {
          return res.status(200).json(task);
        } else {
          return res.status(404).json({error: "task not found"});
        }
      } catch (error) {
        return res.status(500).json({error: error.message});
      }

    case "DELETE":
      try {
        const deletedTask = await Task.findByIdAndDelete(req.query.taskId);
        return res
          .status(200)
          .json({message: `task ${deletedTask.name} deleted`});
      } catch (error) {
        return res.status(500).json({error: error.message});
      }
    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);

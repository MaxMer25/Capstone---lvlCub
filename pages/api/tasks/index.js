import connectDB from "../_db/connect-db";
import {Task} from "../_db/models/Task";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;
    case "POST":
      try {
        const newTask = new Task({
          title: req.body.title,
          image: req.body.image,
          whichOne: req.body.whichOne,
          details: req.body.details,
          gold: req.body.gold,
          experience: req.body.experience,
          until: req.body.until,
          review: req.body.review,
        });
        await newTask.save();
        res.status(200).json(newTask);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);

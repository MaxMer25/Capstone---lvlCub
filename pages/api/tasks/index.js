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
          review: req.body.review,
        });
        await newTask.save();
        res.status(200).json(newTask);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    case "PATCH":
      try {
        const response = await Task.updateOne(req.body.id, req.body.change);
        res.status(200).json(response);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);

import connectDB from "../_db/connect-db";
import {Reward} from "../_db/models/Reward";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const rewards = await Reward.find();
        res.status(200).json(rewards);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;
    case "POST":
      try {
        const newReward = new Reward({
          title: req.body.title,
          cost: req.body.cost,
          image: req.body.image,
          maxPerDay: req.body.maxPerDay,
        });
        await newReward.save();
        res.status(200).json(newReward);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);

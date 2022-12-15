import connectDB from "../_db/connect-db";
import {User} from "../_db/models/User";

async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const user = await User.find();
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;
    case "POST":
      try {
        const newUser = new User({
          name: req.body.name,
          type: req.body.type,
          gold: req.body.gold,
          experience: req.body.experience,
        });
        await newUser.save();
        res.status(200).json(newUser);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    case "PATCH":
      try {
        // Find the user in the database
        const user = await User.findById(req.body.id);

        // Update the user with the new data from the request
        user.name = req.body.name;
        user.type = req.body.type;
        user.gold = req.body.gold;
        user.experience = req.body.experience;

        // Save the updated user to the database
        await user.save();

        // Return the updated user
        res.status(200).json(user);
      } catch (error) {
        res.status(500).json({error: error.message});
      }
      break;

    default:
      return res.status(400).json({error: "method not supported"});
  }
}

export default connectDB(handler);
